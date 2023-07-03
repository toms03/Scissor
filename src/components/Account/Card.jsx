import BarChart from '@mui/icons-material/BarChart';
import { Box, Button, Hidden, Typography } from '@mui/material';
import format from 'date-fns/format';
import QRCode from 'react-qr-code';

/* eslint-disable react/prop-types */
const Card = ({
  id,
  createdAt,
  name,
  longURL,
  shortCode,
  totalClicks,
  deleteLink,
  copyLink,
}) => {
  const shortUrl = `${window.location.host}/${shortCode}`;
  const downloadQR = () => {
    const svg = document.getElementById(shortCode);
    const canvas = document.createElement("canvas");
    canvas.width = svg.clientWidth;
    canvas.height = svg.clientHeight;

    const img = new Image();
    img.src = `data:image/svg+xml;utf8,${new XMLSerializer().serializeToString(
      svg
    )}`;

    img.onload = function () {
      console.log(img);
      canvas.getContext("2d")?.drawImage(img, 0, 0);
      const a = document.createElement("a");
      a.download = "short-link.png";
      a.href = canvas.toDataURL();
      a.click();
    };
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box width="50%">
        <Typography color="textSecondary" variant="overline">
          Created at {format(createdAt, "d MMM, HH:mm")}
        </Typography>
        <Box my={2}>
          <Typography style={{ marginBottom: "5px" }} variant="h5">
            {name}
          </Typography>
          <Typography style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
            {longURL}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography color="primary">{shortUrl}</Typography>
          <Box mx={2}>
            <Button
              onClick={() => copyLink(shortUrl)}
              color="primary"
              size="small"
              variant="outlined"
            >
              Copy
            </Button>
          </Box>
          <Button
            onClick={() => deleteLink(id)}
            color="secondary"
            size="small"
            variant="contained"
            disableElevation
          >
            Delete
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <QRCode
          size={200}
          id={shortCode}
          bgColor="white"
          fgColor="black"
          value={shortUrl}
        />
        <a onClick={downloadQR}> Download QR </a>
      </Box>
      <Box>
        <Box display="flex" justifyContent="center">
          <Typography>{totalClicks}</Typography>
          <BarChart />
        </Box>
        <Hidden only="xs">
          <Typography variant="overline">Total Clicks</Typography>
        </Hidden>
      </Box>
    </Box>
  );
};

export default Card;
