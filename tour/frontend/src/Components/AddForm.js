import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./form.css";
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;

function Addform() {
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [id, setId] = useState();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [days, setDays] = useState();
  const [category, setCategory] = useState();
  const [seat, setSeat] = useState();
  console.log("lkj");

  const newPackage = () => {
    const uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("id", id);
    uploadData.append("description", description);
    uploadData.append("days", days);
    uploadData.append("price", price);
    uploadData.append("seat", seat);
    uploadData.append("category", category);
    uploadData.append("image", image);

    fetch("http://127.0.0.1:8000/api/create-package/", {
      method: "POST",
      body: uploadData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>New Package</h1>
      <Form>
        <div className="form-group">
          <label>Package Name:</label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={name}
            placeholder="Package Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description: </label>
          <textarea
            class="form-control"
            rows="4"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          </div>

          <div class="row-md-6">
            <div class="col">
          <label>
            Price:
            <input
              type="number"
              class="form-control"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          </div>



          <div class="col">
          <label>
            Seats:
            <input
              type="number"
              class="form-control"
              name="seat"
              value={seat}
              onChange={(e) => setSeat(e.target.value)}
            />
          </label>
          </div>

           <div class="col">
          <label>
            Days:
            <input
              type="number"
              class="form-control"
              name="days"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </label>
          </div>
        </div>
        <div className="end">
          <label for="exampleFormControlSelect1">Category: </label>
          <select
            class="form-control"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Package Type</option>
            <option value="Trekking">Trekking</option>
            <option value="Popular">Popular</option>
            <option value="Long">Long Tour</option>
            <option value="Short">Short</option>
          </select>
          <br></br>

          <label>Select image file of the destination :</label>
          <br></br>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
      </Form>
      <Button onClick={() => newPackage()}>Submit</Button>
    </div>
  );
}

export default Addform;