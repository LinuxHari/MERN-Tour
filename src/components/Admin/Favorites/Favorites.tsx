import { RenderProps } from "../../../type";

const Favorites = ({render}: RenderProps) => {
  return (

        <>
          {render("Favorites", "My Favorites")}
          <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60">
          <div className="row y-gap-30">
            <div className="col-lg-3 col-md-6">
              <a
                href="#"
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/1.png"
                      alt="image"
                      className="img-ratio rounded-12"
                    />
                  </div>

                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>

                <div className="tourCard__content px-10 pt-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    Paris, France
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      Centipede Tour - Guided Arizona Desert Tour by ATV
                    </span>
                  </h3>

                  <div className="tourCard__rating d-flex items-center text-13 mt-5">
                    <div className="d-flex x-gap-5">
                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>
                    </div>

                    <span className="text-dark-1 ml-10">4.8 (269)</span>
                  </div>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>

                    <div>
                      From <span className="text-16 fw-500">$189,25</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-md-6">
              <a
                href="#"
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/2.png"
                      alt="image"
                      className="img-ratio rounded-12"
                    />
                  </div>

                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>

                <div className="tourCard__content px-10 pt-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    New York, USA
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      Molokini and Turtle Town Snorkeling Adventure Aboard
                    </span>
                  </h3>

                  <div className="tourCard__rating d-flex items-center text-13 mt-5">
                    <div className="d-flex x-gap-5">
                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>
                    </div>

                    <span className="text-dark-1 ml-10">4.8 (269)</span>
                  </div>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>

                    <div>
                      From <span className="text-16 fw-500">$225,00</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-md-6">
              <a
                href="#"
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/3.png"
                      alt="image"
                      className="img-ratio rounded-12"
                    />
                  </div>

                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>

                <div className="tourCard__content px-10 pt-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    London, UK
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      Westminster Walking Tour &amp; Westminster Abbey Entry
                    </span>
                  </h3>

                  <div className="tourCard__rating d-flex items-center text-13 mt-5">
                    <div className="d-flex x-gap-5">
                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>
                    </div>

                    <span className="text-dark-1 ml-10">4.8 (269)</span>
                  </div>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>

                    <div>
                      From <span className="text-16 fw-500">$943,00</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-md-6">
              <a
                href="#"
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/4.png"
                      alt="image"
                      className="img-ratio rounded-12"
                    />
                  </div>

                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>

                <div className="tourCard__content px-10 pt-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    Paris, France
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>Space Center Houston Admission Ticket</span>
                  </h3>

                  <div className="tourCard__rating d-flex items-center text-13 mt-5">
                    <div className="d-flex x-gap-5">
                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>
                    </div>

                    <span className="text-dark-1 ml-10">4.8 (269)</span>
                  </div>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>

                    <div>
                      From <span className="text-16 fw-500">$189,25</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-md-6">
              <a
                href="#"
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/5.png"
                      alt="image"
                      className="img-ratio rounded-12"
                    />
                  </div>

                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>

                <div className="tourCard__content px-10 pt-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    New York, USA
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      Clear Kayak Tour of Shell Key Preserve and Tampa Bay Area
                    </span>
                  </h3>

                  <div className="tourCard__rating d-flex items-center text-13 mt-5">
                    <div className="d-flex x-gap-5">
                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>
                    </div>

                    <span className="text-dark-1 ml-10">4.8 (269)</span>
                  </div>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>

                    <div>
                      From <span className="text-16 fw-500">$225,00</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-md-6">
              <a
                href="#"
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/6.png"
                      alt="image"
                      className="img-ratio rounded-12"
                    />
                  </div>

                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>

                <div className="tourCard__content px-10 pt-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    London, UK
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      History and Hauntings of Salem Guided Walking Tour
                    </span>
                  </h3>

                  <div className="tourCard__rating d-flex items-center text-13 mt-5">
                    <div className="d-flex x-gap-5">
                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>
                    </div>

                    <span className="text-dark-1 ml-10">4.8 (269)</span>
                  </div>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>

                    <div>
                      From <span className="text-16 fw-500">$943,00</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-md-6">
              <a
                href="#"
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/7.png"
                      alt="image"
                      className="img-ratio rounded-12"
                    />
                  </div>

                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>

                <div className="tourCard__content px-10 pt-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    Paris, France
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      All Inclusive Ultimate Circle Island Day Tour with Lunch
                    </span>
                  </h3>

                  <div className="tourCard__rating d-flex items-center text-13 mt-5">
                    <div className="d-flex x-gap-5">
                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>
                    </div>

                    <span className="text-dark-1 ml-10">4.8 (269)</span>
                  </div>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>

                    <div>
                      From <span className="text-16 fw-500">$189,25</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <div className="col-lg-3 col-md-6">
              <a
                href="#"
                className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
              >
                <div className="tourCard__header">
                  <div className="tourCard__image ratio ratio-28:20">
                    <img
                      src="img/tourCards/1/8.png"
                      alt="image"
                      className="img-ratio rounded-12"
                    />
                  </div>

                  <button className="tourCard__favorite">
                    <i className="icon-heart"></i>
                  </button>
                </div>

                <div className="tourCard__content px-10 pt-10">
                  <div className="tourCard__location d-flex items-center text-13 text-light-2">
                    <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
                    New York, USA
                  </div>

                  <h3 className="tourCard__title text-16 fw-500 mt-5">
                    <span>
                      Mauna Kea Summit Sunset and Stars Free Astro Photos Hilo
                      Kona Waikoloa Pick Up
                    </span>
                  </h3>

                  <div className="tourCard__rating d-flex items-center text-13 mt-5">
                    <div className="d-flex x-gap-5">
                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>

                      <div>
                        <i className="icon-star text-10 text-yellow-2"></i>
                      </div>
                    </div>

                    <span className="text-dark-1 ml-10">4.8 (269)</span>
                  </div>

                  <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
                    <div className="d-flex items-center">
                      <i className="icon-clock text-16 mr-5"></i>4 days
                    </div>

                    <div>
                      From <span className="text-16 fw-500">$225,00</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="d-flex justify-center flex-column mt-60">
            <div className="pagination justify-center">
              <button className="pagination__button button -accent-1 mr-15 -prev">
                <i className="icon-arrow-left text-15"></i>
              </button>

              <div className="pagination__count">
                <a href="#">1</a>
                <a href="#" className="is-active">
                  2
                </a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <div>...</div>
                <a href="#">20</a>
              </div>

              <button className="pagination__button button -accent-1 ml-15 -next">
                <i className="icon-arrow-right text-15"></i>
              </button>
            </div>

            <div className="text-14 text-center mt-20">
              Showing results 1-30 of 1,415
            </div>
          </div>
        </div>
        </>
  );
};

export default Favorites;
