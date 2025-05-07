import * as React from 'react';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { Instagram, Padding } from '@mui/icons-material';
import Link from 'next/link';
const logo2 = "logo2.svg";
const logo3 = "logo3.svg";
const logo4 = "logo4.svg";

export default function Footer() {
  const [color, setColor] = React.useState('neutral');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={[
        {
          bottom: 0,
          flexGrow: 1,
          p: 2
        },
        { backgroundColor: '#171717' },

      ]}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        
        <IconButton variant="plain">
          <InstagramIcon/>
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <a href='https://github.com/pandaboi1/fixer-uppers'><GitHubIcon /></a>
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <LinkedInIcon />
        </IconButton>
        <Divider orientation="vertical" />
        <IconButton variant="plain">
          <TwitterIcon />
        </IconButton>
        <Input
          variant="soft"
          placeholder="Type in your email"
          type="email"
          name="email"
          endDecorator={
            <IconButton variant="soft" aria-label="subscribe">
              <SendIcon />
            </IconButton>
          }
          sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
        />
      </Box>
      <Divider sx={{ my: 2 }} />

      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { md: 'flex-start' },
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 3,
        }}
      >
        {/* MUI */}
        <Card
          variant="variant"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ color: "blue", width: "120%" , height: "auto" }}
          >
            <a  href="https://mui.com/" target="_blank" rel="noopener noreferrer">
            <img alt="mui" src={logo2} />
            </a>
          </AspectRatio>
          <CardContent> 
            <Link href="https://mui.com/" target="http://mui.com/" rel="https://mui.com/">
            <Typography level="body-sm">MUI Ecosystem</Typography>
            </Link>
            <Typography level="body-xs">Offical Site</Typography>
          </CardContent>
        </Card>
        {/* Next */}
        <Card
          variant="variant"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ opacity: "100%", width: "140%" , height: "auto"} }
          >
            <a  href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            <img alt="mui" src={logo3} />
            </a>
          </AspectRatio>
          <CardContent> 
            <Link href="https://nextjs.org/" target="https://nextjs.org/" rel="https://nextjs.org/">
            <Typography level="body-sm">Nextjs</Typography>
            </Link>
            <Typography level="body-xs">Offical Site</Typography>
          </CardContent>
        </Card>
        {/* Vercel */}
        <Card
          variant="variant"
          size="sm"
          sx={{
            flexDirection: { xs: 'row', md: 'column' },
            minWidth: { xs: '100%', md: 'auto' },
            gap: 1,
          }}
        >
          <AspectRatio
            ratio="21/9"
            minHeight={80}
            sx={{ opacity: "100%", width: "140%" , height: "auto" }}
          >
            <a  href="https://vercel.com/home" target="_blank" rel="noopener noreferrer">
            <img alt="mui" src={logo4} />
            </a>
          </AspectRatio>
          <CardContent> 
            <Link href="https://vercel.com/home" target="https://vercel.com/home" rel="https://vercel.com/home">
            <Typography level="body-sm">Vercel</Typography>
            </Link>
            <Typography level="body-xs">Offical Site</Typography>
          </CardContent>
        </Card>
        <List
          style={{ position:"absolute", bottom: 0, right: 0,  paddingBottom: 50}}  
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, '--ListItem-radius': '8px' }}
        >
          <ListItem nested sx={{ width: { xs: '50%', md: 140, alignContent: "right"} }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>About</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: '50%', md: 180 } }}>
            <ListSubheader sx={{ fontWeight: 'xl' }}>Products</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Joy UI</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>MUI Base</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Material UI</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}
