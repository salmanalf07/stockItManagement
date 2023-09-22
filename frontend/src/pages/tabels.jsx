import React, { useEffect } from "react";
import $ from "jquery";
import axios from "axios";
const token = localStorage.getItem("token");
import refreshAccessToken from "../authService";
import { useNavigate } from "react-router-dom";

export default function tabels() {
  const navigate = useNavigate();
  useEffect(() => {
    refreshAccessToken()
      .then((refreshedToken) => {
        // Check if DataTable is already initialized
        if ($.fn.DataTable.isDataTable("#example1")) {
          return; // DataTable is already initialized, no need to reinitialize
        }

        // DataTable initialization
        $("#example1").DataTable({
          dom: "Bfrtip",
          processing: true,
          serverSide: true,
          buttons: ["pageLength", "copy", "excel", "pdf", "print"],
          columnDefs: [
            {
              className: "text-center",
              targets: [0, 3], // table ke 1
            },
          ],
          ajax: {
            url: "http://127.0.0.1:8000/api/user/json_users", // Ganti dengan URL API di Laravel
            type: "GET",
            headers: {
              Authorization: `Bearer ${refreshedToken}`, // Use the refreshed token
            },
          },
          fnCreatedRow: function (row, data, index) {
            $("td", row)
              .eq(0)
              .html(index + 1);
          },
          columns: [
            { title: "No", data: "id" },
            { title: "Name", data: "name" },
            { title: "Email", data: "email" },
            { title: "Action", data: "aksi" },
            // Tambahkan kolom-kolom sesuai dengan struktur data dari API
          ],
        });
      })
      .catch((error) => {
        console.error("Failed to make a request:", error);
        navigate("/");
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                DataTable with minimal features & hover style
              </h3>
            </div>
            {/* <!-- /.card-header --> */}
            <div className="card-body">
              <table
                id="example1"
                className="table table-striped table-bordered nowrap"
                style={{ width: "100%" }}
              >
                <thead className="text-center"></thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
