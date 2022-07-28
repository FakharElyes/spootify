// @mui material components
import Grid from "@mui/material/Grid";

// spootify React components
import VuiBox from "components/VuiBox";

// spootify React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// spootify React base styles
import colors from "assets/theme/base/colors";

// spootify layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";

import react, {useState} from "react";


import { search } from '../../data/search';



function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const numbers =[0,1,2,3,4,5,6,7,8,9];

  const [data, setData] = useState(null);

  // searchAlbum().then((result) => {
  //   setData({
  //     data: result
  //   });
  // });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing="18px">
            {
              numbers.map(() =>
              <Grid item xs={12} lg={12} xl={5}>
                <WelcomeMark />
              </Grid>
              )
            }
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;

async function searchAlbum(){
  var data = await search();
  return data;
}