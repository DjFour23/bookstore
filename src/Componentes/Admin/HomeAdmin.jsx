import { useAuth } from "../../Context/authContext";
import { AiFillPlusSquare } from "react-icons/ai";
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
import { CustomModal } from "./CustomModal ";
import { getLibros, deleteLibro } from "./../../Firebase/Api/api";
import swal from 'sweetalert'


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
  const [libros, setLibros] = React.useState([{}]);
  // obtener libros
  const getLinks = async () => {
    const querySnapshot = await getLibros();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setLibros(docs);
  };
  // Eliminar un libro
  const onDelete = async (id) => {
    try {
      await deleteLibro(id);
      swal({
        title: "Libro eliminado",
        icon: "success",
      });
    } catch (error) {
      swal({
        title: "Error",
        text: `Try again`,
        icon: "error",
      });
    }
  }

  // cargar los libros
  React.useEffect(() => {
    getLinks();
  }, []);

  // Abrir modal
  const [open, setOpen] = React.useState(false);
  /* const handleOpen = () => setOpen(true); */
  const handleClose = () => setOpen(false);
  // HTML - Admin view
  return (
    <div className="primero">
      <div className="contenedor-primary">
        <div className="w-full max-w-xs m-auto text-black">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="nav-admin">
              <p className="text-xl ">
                Welcome Admin: {user.displayName || user.email}
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
          <div className="container-create">
            <h2>Libros</h2>
            <a href="/Libros">
            <IconButton color="primary" className="iconModal" >
              <AiFillPlusSquare fontSize={"29px"} />
            </IconButton>
            </a>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" padding="none">ID</TableCell>
                  <TableCell align="center" padding="none">NOMBRE</TableCell>
                  <TableCell align="center" padding="none">AUTOR</TableCell>
                  <TableCell align="center" padding="none">AÑO</TableCell>
                  <TableCell align="center" padding="none">DISPONIBLE</TableCell>
                  <TableCell align="center" padding="none">CARATULA</TableCell>
                  <TableCell align="center" padding="none">FUNCIONES</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {libros.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell scope="center">{item.id}</TableCell>
                    <TableCell align="center">{item.nombre}</TableCell>
                    <TableCell align="center">{item.autor}</TableCell>
                    <TableCell align="center">{item.year}</TableCell>
                    <TableCell align="center">{item.disponible}</TableCell>
                    <TableCell align="center">{item.caratula}</TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                      }}
                    >
                      <IconButton color="error" className="iconDelete" onClick={(e) => {
                        e.stopPropagation();
                        onDelete(item.id);
                        getLinks();
                      }}>
                        <MdDelete fontSize={"29px"} />
                      </IconButton>
                      <IconButton color="success" className="iconEdit" >
                        <FaEdit fontSize={"25px"} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <CustomModal handleClose={handleClose} open={open} />
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
export default HomeAdmin;
