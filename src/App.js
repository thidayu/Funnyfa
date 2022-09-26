import { Box, Container, Stack } from "@mui/material";

import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";


function App() {

  return (
    <div>
      <Box>
        <Stack direction="row" spacing={3} justifyContent="space-evenly">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </Stack>
      </Box>
    </div>
  );
}

export default App;
