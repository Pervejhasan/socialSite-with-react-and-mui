import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={5}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://www.pngitem.com/pimgs/m/50-503554_business-girl-png-business-woman-images-png-transparent.png"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://img.lovepik.com/free-png/20220127/lovepik-beauty-real-estate-broker-introduction-property-png-image_401944313_wh1200.png"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://i.pinimg.com/736x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://img.lovepik.com/free-png/20220127/lovepik-beauty-real-estate-broker-introduction-property-png-image_401944313_wh1200.png"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Breakfast%21.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://st.depositphotos.com/1098692/3735/i/600/depositphotos_37356347-stock-photo-orange-juice.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://restaurantclicks.com/wp-content/uploads/2022/01/brunch-ann-arbor-michigan.jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="h6" fontWeight={100} mt={2}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.pinimg.com/736x/f8/93/c7/f893c7e1abe5b076eaee7c58223329e5.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Travis Howard"
                  src="https://img.lovepik.com/free-png/20220127/lovepik-beauty-real-estate-broker-introduction-property-png-image_401944313_wh1200.png"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Cindy Baker"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
