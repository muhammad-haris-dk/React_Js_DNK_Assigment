import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product_data } from "../utils/Product_data";
import { Product_data_02 } from "../utils/Product_data_02";
import { Container } from "@mui/material";
import Alert from "@mui/joy/Alert";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/joy/IconButton";
import LinearProgress from "@mui/joy/LinearProgress";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Check from "@mui/icons-material/Check";
import Close from "@mui/icons-material/Close";
export default function Product_Details() {
  const params = useParams();
  const navigate = useNavigate()
  const [count, setcount] = useState(0);
  const [condition, setCondition] = useState(false);
  const inc_count = () => {
    setcount(count + 1);
  };
  const dec_count = () => {
    setcount(count - 1);
    if (count == 0) {
      setcount(0);
    }
  };
  const alert_handle = () => {
    setCondition(true);
  };
  const [data, setData] = useState([...Product_data, ...Product_data_02]);
  const filtered_Arr = data.filter((e) => {
    return e.id == params.id;
  });
  const {title} = filtered_Arr
  // console.log(filtered_Arr)
  return (
    <div>
      {condition === true ? (
        <Stack spacing={2} sx={{ maxWidth: "100%",maxHeight:"250px" }}>
          <Alert
            size="lg"
            color="success"
            variant="solid"
            invertedColors
            startDecorator={
              <AspectRatio
                variant="solid"
                ratio="1"
                sx={{
                  minWidth: 40,
                  borderRadius: "50%",
                  boxShadow: "0 2px 12px 0 rgb(0 0 0/0.2)",
                }}
              >
                <div>
                  <Check fontSize="xl2" />
                </div>
              </AspectRatio>
            }
            endDecorator={
              <IconButton
                variant="plain"
                sx={{
                  "--IconButton-size": "32px",
                  transform: "translate(0.5rem, -0.5rem)",
                }}
              >
                <Close onClick={() => setCondition(false)} />
              </IconButton>
            }
            sx={{ alignItems: "flex-start", overflow: "hidden" }}
          >
            <div>
              <Typography level="title-lg">Success</Typography>
              <Typography level="body-sm">
                Your {count} product is Successfully done!
              </Typography>
            </div>
            <LinearProgress
              variant="solid"
              color="success"
              value={40}
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: 0,
              }}
            />
          </Alert>
        </Stack>
      ) : (
        <Container maxWidth={false} sx={{ marginTop: "150px",width:"100%" }}>
          {filtered_Arr.map((pro, index) => {
            return (
              <div key={index} className="container row d-flex justify-content-center align-items-center">
                <div key={index} className="div-container col-md-6">
                  <img src={pro.image} className="details_image " alt="" />
                </div>
                <div className="col-md-6">
                  <button className="details_button" onClick={() =>  navigate(`/`)}>Home</button>/
                  <button className="details_button">{pro.title}</button>
                  <br />
                  <br />
                  <h1>{pro.title}</h1>
                  <br />
                  <h5>${pro.price}</h5>
                  <br />
                  <p>{pro.description}</p>
                  <br />
                  <div className="details_count">
                    <button onClick={inc_count} className="details_button-1">
                      +{" "}
                    </button>
                    {"  "}
                    <span>{count}</span>
                    {"  "}
                    <button onClick={dec_count} className="details_button-1">
                      {" "}
                      -
                    </button>
                  </div>
                  <div className="details_count-2">
                    <button onClick={alert_handle} className="details_button-2">
                      ADD TO Cart
                    </button>
                  </div>
                  <hr />
                </div>
              </div>
            );
          })}
        </Container>
      )}
    </div>
  );
}
