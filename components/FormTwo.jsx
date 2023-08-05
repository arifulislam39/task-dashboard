import React from "react";

const FormTwo = () => {
  return (
    <div className=" mt-6">
      <div className="lg:flex">
        {/* first form */}

        <div className="w-2/3 mr-16 bg-white rounded-lg">
          {" "}
          <div className="p-6">
            <h2 className="font-bold text-xl">Form title</h2>
            <p className="pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id
              soluta exercitationem quaerat?
            </p>

            <form>
              <div className="">
                {/* 1 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Label title</span>
                  </label>
                  <input
                    name=""
                    type="text"
                    className="input input-bordered "
                    placeholder="Placeholder content"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Label title</span>
                  </label>
                  <select
                    id="cars"
                    name="sub_category"
                    className="input input-bordered "
                  >
                    <option value="car">Chose</option>
                    <option value="racing_car">2</option>
                    <option value="jeep">3</option>
                    <option value="truck">4</option>
                  </select>
                </div>

                {/* line 2 */}

                {/* line 3 */}
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Label title</span>
                    </label>
                    <input
                      name=""
                      type="text"
                      className="input input-bordered "
                      placeholder="Placeholder content"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Label title</span>
                    </label>
                    <input
                      name=""
                      type="text"
                      className="input input-bordered "
                      placeholder="Placeholder content"
                    />
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
        {/* 
        second form */}

        <div className=" w-1/3 bg-white">
          <div className="p-6">
            <h2 className="font-bold text-xl">Form title</h2>

            <form>
              <div className="">
                {/* 1 */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Label title</span>
                  </label>
                  <input
                    name=""
                    type="text"
                    className="input input-bordered "
                    placeholder="Placeholder content"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Label title</span>
                  </label>
                  <select
                    id="cars"
                    name="sub_category"
                    className="input input-bordered "
                  >
                    <option value="car">Chose</option>
                    <option value="racing_car">2</option>
                    <option value="jeep">3</option>
                    <option value="truck">4</option>
                  </select>
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

                  <button className="btn btn-active btn-primary mt-6">
                    Primary
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTwo;
