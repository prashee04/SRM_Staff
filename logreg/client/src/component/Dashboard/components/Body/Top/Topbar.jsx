import { Box, IconButton, useTheme } from "@mui/material";
// import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
// import Header from "../../components/Header";
// import Sidebar from "./Sidebar";
import "./topbar.css";

const Topbar = () => {
  return (
    <div display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      {/* <Sidebar /> */}
      {/* <InputBase
					sx={{
						ml: 2,
						flex: 1,
					}}
					placeholder="Search"
				/>
				<IconButton
					type="button"
					sx={{
						p: 1,
					}}>
					<SearchIcon />
				</IconButton> */}
      <div
        display="flex"
        // backgroundColor={colors.primary[400]}
        borderRadius="3px"
      ></div>

      <div
        className="topbar-title"
        variant="h2"
        // color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {/* <h2>SRM INSTITUTE OF SCIENCE AND TECHNOLOGY RAMAPURAM CAMPUS</h2> */}
      </div>

      {/* ICONS */}
      <div display="flex">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Topbar;
