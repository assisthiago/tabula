import { Spinner } from "react-bootstrap";

export default function Loader({ size = "lg" }) {
  return (
    <div
      className="d-flex justify-content-center vw-100 vh-100 align-items-center position-fixed top-0 start-0 bg-white bg-opacity-75"
      style={{ zIndex: 1050 }}
    >
      <Spinner animation="grow" role="status" size={size} />
    </div>
  );
}
