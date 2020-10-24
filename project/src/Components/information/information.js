import React from "react";
import "./information.css";
import Description from "../../Components/description/description";
import GetLocal from "../../Helper/getLocal";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Information = ({ coll, title }) => {
  let collection = GetLocal(coll);
  const history = useHistory();

  const deleteItem = (coll, type, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to delete this item from the collection",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      background: "#000",
      customClass: 'swal-wide'
    }).then((result) => {
      if (result.value) {
        let arr = [];
        arr = coll.filter((item) => !item.id.includes(id));
        localStorage.setItem(type, JSON.stringify(arr));
        history.go(0);
      }
    });
  };

  return (
    <div>
      <Description
        title={title}
        description={`These are the ${title} that you have saved`}
      />
      {collection ? (
        <div className="content">
          <ul className="descList">
            {collection.map((item, index) => (
              <li className="descriptionLi" key={index}>
                <h3>
                  {item.name}
                  </h3>
                  <div className="svgDiv">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 297 297"
                    width="1.5rem"
                    onClick={() => deleteItem(collection, coll, item.id)}
                    fill="currentColor"
                  >
                    <g>
                      <g>
                        <g>
                          <path
                            d="M248.37,83.22L110.422,17.701c-6.899-3.274-15.181-0.329-18.459,6.571l-4.696,9.888l162.978,77.407l4.697-9.887
				                    C258.219,94.779,255.271,86.498,248.37,83.22z"
                          />
                          <path
                            d="M47.689,88.697c-1.949,0-3.809,0.816-5.128,2.25c-1.319,1.434-1.979,3.356-1.817,5.298l14.091,169.088
				                    C56.315,283.09,71.432,297,89.251,297h78.847c17.819,0,32.936-13.91,34.415-31.667l12.907-154.876l-45.815-21.76H47.689z"
                          />
                          <path
                            d="M165.576,20.294c1.273-2.68,3.514-4.704,6.309-5.699c2.798-0.995,5.812-0.843,8.493,0.43l25.862,12.283
                            c5.534,2.629,7.898,9.269,5.27,14.802l-3.167,6.668l12.59,5.98l3.167-6.668c5.925-12.474,0.596-27.445-11.88-33.371
                            L186.357,2.436c-6.042-2.87-12.842-3.217-19.146-0.972c-6.303,2.243-11.355,6.807-14.225,12.851l-3.166,6.667l12.589,5.98
                            L165.576,20.294z"
                          />
                        </g>
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                  </div>
                <p className="descP infoP">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Information;
