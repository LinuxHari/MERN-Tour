import DatePicker from "../shared/DatePicker/DatePicker"

const Filters = () => {
  return (
    <div className="sidebar -type-1 rounded-12">
                <div className="sidebar__header bg-accent-1">
                  <div className="text-15 text-white fw-500">When are you traveling?</div>

                  <div className="mt-10">
                    <DatePicker/>
                  </div>
                </div>

                <div className="sidebar__content">
                  <div className="sidebar__item">
                    <div className="accordion -simple-2 js-accordion">
                      <div className="accordion__item js-accordion-item-active">
                        <div className="accordion__button d-flex items-center justify-between">
                          <h5 className="text-18 fw-500">Tour Type</h5>

                          <div className="accordion__icon flex-center">
                            <i className="icon-chevron-down"></i>
                            <i className="icon-chevron-down"></i>
                          </div>
                        </div>

                        <div className="accordion__content">
                          <div className="pt-15">
                            <div className="d-flex flex-column y-gap-15">

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Nature Tours</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Adventure Tours</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Cultural Tours</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Food Tours</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">City Tours</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Cruises Tours</div>

                                </div>

                              </div>

                            </div>

                            <a href="#" className="d-flex text-15 fw-500 text-accent-2 mt-15">See More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Filter price --> */}
                  <div className="sidebar__item">
                    <div className="accordion -simple-2 js-accordion">
                      <div className="accordion__item js-accordion-item-active">
                        <div className="accordion__button mb-10 d-flex items-center justify-between">
                          <h5 className="text-18 fw-500">Filter Price</h5>

                          <div className="accordion__icon flex-center">
                            <i className="icon-chevron-down"></i>
                            <i className="icon-chevron-down"></i>
                          </div>
                        </div>

                        <div className="accordion__content">
                          <div className="pt-15">
                            <div className="js-price-rangeSlider">
                              <div className="px-5">
                                <div className="js-slider"></div>
                              </div>

                              <div className="d-flex justify-between mt-20">
                                <div className="">
                                  <span className="">Price:</span>
                                  <span className="fw-500 js-lower">11,200</span>
                                  <span> - </span>
                                  <span className="fw-500 js-upper">15,000</span>
                                </div>

                                <div className="fw-500">
                                  Filter
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Duration --> */}
                  <div className="sidebar__item">
                    <div className="accordion -simple-2 js-accordion">
                      <div className="accordion__item js-accordion-item-active">
                        <div className="accordion__button d-flex items-center justify-between">
                          <h5 className="text-18 fw-500">Duration</h5>

                          <div className="accordion__icon flex-center">
                            <i className="icon-chevron-down"></i>
                            <i className="icon-chevron-down"></i>
                          </div>
                        </div>

                        <div className="accordion__content">
                          <div className="pt-15">
                            <div className="d-flex flex-column y-gap-15">

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">0-3 hours</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">3-5 hours</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">5-7 hours</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Full day (7+ hours)</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Multi-day</div>

                                </div>

                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Language --> */}
                  <div className="sidebar__item">
                    <div className="accordion -simple-2 js-accordion">
                      <div className="accordion__item js-accordion-item-active">
                        <div className="accordion__button d-flex items-center justify-between">
                          <h5 className="text-18 fw-500">Language</h5>

                          <div className="accordion__icon flex-center">
                            <i className="icon-chevron-down"></i>
                            <i className="icon-chevron-down"></i>
                          </div>
                        </div>

                        <div className="accordion__content">
                          <div className="pt-15">
                            <div className="d-flex flex-column y-gap-15">

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">English</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Dutch</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">German</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">French</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Italian</div>

                                </div>

                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Rating --> */}
                  <div className="sidebar__item">
                    <div className="accordion -simple-2 js-accordion">
                      <div className="accordion__item js-accordion-item-active">
                        <div className="accordion__button d-flex items-center justify-between">
                          <h5 className="text-18 fw-500">Rating</h5>

                          <div className="accordion__icon flex-center">
                            <i className="icon-chevron-down"></i>
                            <i className="icon-chevron-down"></i>
                          </div>
                        </div>

                        <div className="accordion__content">
                          <div className="pt-15">
                            <div className="d-flex flex-column y-gap-15">

                              <div className="d-flex">
                                <div className="form-checkbox">
                                  <input type="checkbox" name="rating"/>
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon">
                                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex x-gap-5 ml-10">

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                </div>
                              </div>

                              <div className="d-flex">
                                <div className="form-checkbox">
                                  <input type="checkbox" name="rating"/>
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon">
                                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex x-gap-5 ml-10">

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>


                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                </div>
                              </div>

                              <div className="d-flex">
                                <div className="form-checkbox">
                                  <input type="checkbox" name="rating"/>
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon">
                                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex x-gap-5 ml-10">

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>


                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                </div>
                              </div>

                              <div className="d-flex">
                                <div className="form-checkbox">
                                  <input type="checkbox" name="rating"/>
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon">
                                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex x-gap-5 ml-10">

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>


                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                </div>
                              </div>

                              <div className="d-flex">
                                <div className="form-checkbox">
                                  <input type="checkbox" name="rating"/>
                                  <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon">
                                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex x-gap-5 ml-10">

                                  <i className="flex-center icon-star text-yellow-2 text-13"></i>


                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                  <i className="flex-center icon-star text-light-6 text-13"></i>

                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Specials --> */}
                  <div className="sidebar__item">
                    <div className="accordion -simple-2 js-accordion">
                      <div className="accordion__item js-accordion-item-active">
                        <div className="accordion__button d-flex items-center justify-between">
                          <h5 className="text-18 fw-500">Specials</h5>

                          <div className="accordion__icon flex-center">
                            <i className="icon-chevron-down"></i>
                            <i className="icon-chevron-down"></i>
                          </div>
                        </div>

                        <div className="accordion__content">
                          <div className="pt-15">
                            <div className="d-flex flex-column y-gap-15">

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Deals &amp; Discounts</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Free Cancellation</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Likely to Sell Out</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Skip-The-Line</div>

                                </div>

                              </div>

                              <div>

                                <div className="d-flex items-center">
                                  <div className="form-checkbox ">
                                    <input type="checkbox" name="name"/>
                                    <div className="form-checkbox__mark">
                                      <div className="form-checkbox__icon">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z" fill="white" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="lh-11 ml-10">Private Tour</div>

                                </div>

                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Filters