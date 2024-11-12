import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [nodeId, setNodeId] = useState();
  const [aq, setAq] = useState("");
  const [li, setLi] = useState("");
  const [sl, setSl] = useState("");
  const [aq1, setAq1] = useState("");
  const [li1, setLi1] = useState("");
  const [sl1, setSl1] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/api/sensors");
    setItems(res.data);
  };

  const addItems = async () => {
    await axios.post("http://localhost:5000/api/sensors", {
      nodeId: nodeId,
      air_quality: aq,
      light_intensity: li,
      sound_levels: sl,
    });
    setNodeId();
    setAq("");
    setLi("");
    setSl("");
    fetchItems();
  };

  const updateItems = async (item) => {
    await axios.put(`http://localhost:5000/api/sensors/`, item);
    fetchItems();
  };

  const deleteItems = async (id) => {
    await axios.delete(`http://localhost:5000/api/sensors/${id}`);
    fetchItems();
  };

  return (
    <>
      <div className="formWrapper">
        <div>
          <label>Node ID: </label>
          <input
            type="number"
            value={nodeId || ""}
            onChange={(e) => setNodeId(e.target.value)}
          />
        </div>
        <div>
          <label>Air Quality</label>
          <select value={aq} onChange={(e) => setAq(e.target.value)}>
            <option value="">Select an option</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label>Light Intensity: </label>
          <select value={li} onChange={(e) => setLi(e.target.value)}>
            <option value="">Select an option</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label>Sound Levels</label>
          <select value={sl} onChange={(e) => setSl(e.target.value)}>
            <option value="">Select an option</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <input type="button" onClick={addItems} value="Submit" />
      </div>
      <div className="displayWrapper">
        <table border="1">
          <thead>
            <tr>
              <th>Node Id</th>
              <th>Air Quality</th>
              <th>Light Intensity</th>
              <th>Sound Levels</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item.nodeId}</td>
                <td>
                  <select
                    value={item.air_quality}
                    onChange={(e) => {
                      item.air_quality = e.target.value;
                      setAq1(e.target.value);
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </td>
                <td>
                  <select
                    value={item.light_intensity}
                    onChange={(e) => {
                      item.light_intensity = e.target.value;
                      setLi1(e.target.value);
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </td>
                <td>
                  <select
                    value={item.sound_levels}
                    onChange={(e) => {
                      item.sound_levels = e.target.value;
                      setSl1(e.target.value);
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteItems(item._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      updateItems({
                        id: item._id,
                        air_quality: item.air_quality,
                        light_intensity: item.light_intensity,
                        sound_levels: item.sound_levels,
                      });
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
