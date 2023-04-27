import { useAuth } from "../../Context/authContext";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { CustomModal  } from "./CustomModal ";

// Admin view
export function HomeAdmin() {
  const { logout, user } = useAuth();

  // Log out - Admin
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  // Abrir modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // HTML - Admin view
  return (
    <div className="primero">
    <div className="contenedor-primary">
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="nav-admin">
          <p className="text-xl ">
            welcome Admin: {user.displayName || user.email}
          </p>
          <button
            className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
            id="logout-admin"
            onClick={handleLogout}
            >
            Logout
          </button>
        </div>
        </div>
        </div>
        
        <div className="container-admin">
          <h2>
            Tabla de Vainas
          </h2>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" padding="none">ID</TableCell>
                  <TableCell align="center" padding="none">NOMBRE</TableCell>
                  <TableCell align="center" padding="none">COSA</TableCell>
                  <TableCell align="center" padding="none">AÑO</TableCell>
                  <TableCell align="center" padding="none">FUNCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow >
                  <TableCell scope="center"></TableCell>
                  <TableCell></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell align="center"></TableCell>
                  <TableCell
                  padding="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      
                    }}
                  >

                    <IconButton
                      aria-label="fingerprint"
                      className="iconModal"
                      color="primary"
                      onClick={handleOpen}>
                      <IoEyeSharp fontSize={"30px"} />
                    </IconButton>

                    <IconButton color="error" className="iconDelete" onClick={handleOpen}>
                      <MdDelete fontSize={"29px"} />
                    </IconButton>

                    
                    <IconButton color="success" className="iconEdit" >
                      <FaEdit fontSize={"25px"} />
                    </IconButton>


                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          <CustomModal handleClose={handleClose} open={open}/>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
export default HomeAdmin;
