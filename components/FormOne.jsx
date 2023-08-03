import React from "react";

const FormOne = () => {
  return (
    <div>
      <div>
        <form>
          <div className="">
            {/* 1 */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input name="" type="text" className="input input-bordered " />
            </div>

            {/* line 2 */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <select
                  id="cars"
                  name="sub_category"
                  className="input input-bordered "
                >
                  <option value="car">1</option>
                  <option value="racing_car">2</option>
                  <option value="jeep">3</option>
                  <option value="truck">4</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input name="" type="text" className="input input-bordered " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input name="" type="text" className="input input-bordered " />
              </div>
            </div>

            {/* line 3 */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input name="" type="text" className="input input-bordered " />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input name="" type="text" className="input input-bordered " />
              </div>
            </div>

            {/* line 4 */}

            <div className="form-control">
            <label className="label">
              <span className="label-text">Details Description</span>
            </label>
            <textarea
              name="description"
              type="text"
              className="textarea textarea-bordered"
              placeholder="Type here....."
            ></textarea>
          </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOne;
