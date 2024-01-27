import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { useNavigate } from "react-router-dom";
export default function Product_Card({ data }) {
  const navigate = useNavigate()
  
  const {
    title,
    description,
    price,
    id,
    image,
    rating: { rate, count },
  } = data;
  const show_Data_Handling = () =>{
    navigate(`/product/${id}`)
  }
  return (
    <div>
      <Card sx={{ width: "100%" }}>
        <div>
          <Typography level="title-lg">{title.substring(0, 18)}..</Typography>
          {/* <Typography level="body-sm">April 24 to May 02, 2021</Typography> */}
          <IconButton
            aria-label="bookmark Bahamas Islands"
            variant="plain"
            color="neutral"
            size="sm"
            sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
          >
            <BookmarkAdd />
          </IconButton>
        </div>
        <AspectRatio minHeight="100%" maxHeight="100%">
          <img
            src={image}
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              ${price}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="md"
            color="primary"
            aria-label="Explore Bahamas Islands"
            onClick={show_Data_Handling}
            sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
          >
            Explore
          </Button>
        </CardContent>
      </Card>
      <br />
    </div>
  );
}
