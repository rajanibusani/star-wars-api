import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Loading Spinner
function LoadingSpinner() {
    return (
        <tr className="loader">
            <td>
                <i className="fa fa-spinner fa-spin" /> Loading...
            </td>
        </tr>
    );
}
export default LoadingSpinner;
