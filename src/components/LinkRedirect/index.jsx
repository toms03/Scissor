import { Box, CircularProgress, Typography } from '@mui/material';
import { doc, getDoc, increment, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { firestore } from '../../firebase';

const LinkRedirect = () => {
  const { shortCode } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinkDoc = async () => {
      const linkDoc = await getDoc(doc(firestore, "links", shortCode));
      if (linkDoc.exists()) {
        const { longURL, linkID, userUid } = linkDoc.data();
        const docRef = doc(firestore, "users", userUid, "links", linkID);
        updateDoc(docRef, {
          totalClicks: increment(1),
        });
        window.location.href = longURL;
      } else {
        setLoading(false);
      }
    };
    fetchLinkDoc();
  }, [shortCode]);

  if (loading)
    return (
      <Box mt={10} textAlign="center">
        <CircularProgress />
        <Typography>Redirecting to the link</Typography>
      </Box>
    );
  else
    return (
      <Box mt={10} textAlign="center">
        <Typography>Link is invalid</Typography>
      </Box>
    );
};

export default LinkRedirect;
