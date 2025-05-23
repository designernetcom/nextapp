"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import components with SSR disabled to prevent window access during SSR
const Menu = dynamic(() => import("../../../../components/Header/Menu/Menu"), {
  ssr: false,
});
const Footer = dynamic(() => import("../../../../components/Footer/Footer"), {
  ssr: false,
});
const EnquiryModel = dynamic(
  () => import("../../../../components/EnquiryModel"),
  { ssr: false }
);

// CSS imports remain unchanged
import "../../styles/5107c2122129e0bb.css";
import "../../styles/style.css";
import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/bootstrap.min.css";
import "../../styles/33f1be5fd79e728d.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bcdb44b6ad772c90.css";
import "../../styles/e74b165e0d429359.css";
import "../../styles/8c8030bf7e3ee32c.css";

export default function Page() {
  const [showModal, setShowModal] = useState(false); // Manage modal visibility
  const [fixedHeader, setFixedHeader] = useState(false); // Manage header state

  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Uncommented and ensured window access is safe
  useEffect(() => {
    const handleScroll = () => {
      setFixedHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Menu />
      <div>
        <a
          className="float"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=918806099993&text=I%27m%20looking%20for"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 448 512"
            style={{ color: "white" }}
            className="my_float"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </a>
        {/*$*/}
        <div>
          <button
            className="enquirynow_enquirynow_btn__mRuEZ"
            style={{ transformOrigin: "bottom right" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" />
            </svg>
            Enquire Now
          </button>
        </div>
        {/*/$*/}
        <div>
          <div className="headCarousal_collegeCarousal__4a5Bq">
            <img
              src="https://store.learningroutes.in/images/colleges/UP-Rajarshi-Tandan-Open-University/hero-image/banner.webp"
              fetchPriority="high"
              className="headCarousal_clg_banner__CXazi"
              alt="hero-image"
              width={240}
              height={240}
            />
            <div className="headCarousal_gradientOverlayStyle__DEkSg" />
            <div className="headCarousal_collegeHeadingContainer__E4uDz">
              <h1 className="headCarousal_collegeHeading__KBbuL">
                U.P. Rajarshi Tandan Open University
              </h1>
              <p className="headCarousal_location__7rFlL">
                Prayagraj{/* */},{/* */}Uttar Pradesh
              </p>
              <p className="headCarousal_ranking__1yTOY">NIRF Rank: ---</p>
              <div className="headCarousal_accreditation__HUqxZ">
                <img
                  src="https://store.learningroutes.in/images/colleges/UP-Rajarshi-Tandan-Open-University/accreditations/NAAC B+.webp"
                  alt="accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
                <img
                  src="https://store.learningroutes.in/images/colleges/UP-Rajarshi-Tandan-Open-University/accreditations/UGC_DEB.webp"
                  alt="accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
                <img
                  src="https://store.learningroutes.in/images/colleges/UP-Rajarshi-Tandan-Open-University/accreditations/aicte.webp"
                  alt="accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
              </div>
              <div className="headCarousal_proceedCompareContainer__rekWb">
                <a href="/top-university">
                  <button className="headCarousal_collegeCompare__znhHH">
                    Add To Compare
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="college_collegWrapper__vaQh1">
            <div className="college_collegeContainer__nqZS1">
              <div className="college_dataSection__0M4eV">
                <div className="collegeDetails_detailsPage__0qlWI">
                  <div className="collegeDetails_scroller__kwBjm">
                    <a
                      className="collegeDetails_scrollerElement__iuUFa"
                      id="link-About"
                      href="#About"
                    >
                      <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_selectedBox___Y1P_ collegeDetails_textWhite__q6ndV">
                        About
                      </div>
                    </a>
                    <a
                      className="collegeDetails_scrollerElement__iuUFa"
                      id="link-High"
                      href="#High"
                    >
                      <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                        Highlights
                      </div>
                    </a>
                    <a
                      className="collegeDetails_scrollerElement__iuUFa"
                      id="link-Courses"
                      href="#Courses"
                    >
                      <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                        Courses
                      </div>
                    </a>
                    <a
                      className="collegeDetails_scrollerElement__iuUFa"
                      id="link-Course Eligibility"
                      href="#Course Eligibility"
                    >
                      <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                        Course Eligibility
                      </div>
                    </a>
                    <a
                      className="collegeDetails_scrollerElement__iuUFa"
                      id="link-Enquire Now"
                      href="#Enquire Now"
                    >
                      <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                          }}
                        >
                          <div>Enquire Now</div>
                          <div className="college_blink__yxq74" />
                        </div>
                      </div>
                    </a>
                    <a
                      className="collegeDetails_scrollerElement__iuUFa"
                      id="link-Certification"
                      href="#Certification"
                    >
                      <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                        Certifications
                      </div>
                    </a>
                    <a
                      className="collegeDetails_scrollerElement__iuUFa"
                      id="link-Admission"
                      href="#Admission"
                    >
                      <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                        Admission Procedure
                      </div>
                    </a>
                    <a
                      className="collegeDetails_scrollerElement__iuUFa"
                      id="link-Placement"
                      href="#Placement"
                    >
                      <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                        Placement
                      </div>
                    </a>
                    <a
                      className="collegeDetails_scrollerElement__iuUFa"
                      id="link-Review"
                      href="#Review"
                    >
                      <div className="collegeDetails_sectionBox__ZGGBm collegeDetails_textBlack__LRxI5">
                        Review
                      </div>
                    </a>
                  </div>
                  <div className="collegeDetails_detailsContainer__6A8oL">
                    <div className="collegeDetails_maxWidth__6vBVL" id="About">
                      <div className="about_collegeDetails__67FzM">
                        <h2 className="about_collegeDetailsHeading__AA_dr">
                          U.P. Rajarshi Tandan Open University
                        </h2>
                        <p className="about_collegeDetailsDescription__7Swyd">
                          Uttar Pradesh Rajarshi Tandon Open University provides
                          learner-centric and value-based education of high
                          quality to all classes of Indian societies and Uttar
                          Pradesh for all-round inclusive development and for
                          enhancing their knowledge and skills through distance
                          education for the learners.
                        </p>
                      </div>
                    </div>
                    <div className="collegeDetails_maxWidth__6vBVL" id="High">
                      <div className="Highlights_container__yqw8t">
                        <h2 className="Highlights_heading__QnGK2">
                          Highlights
                        </h2>
                        <div className="Highlights_grid__zFaon">
                          <div className="Highlights_pointContainer__5_snP">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              className="Highlights_pointIcon__m_iYg"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 3l5 5-5 5-5-5 5-5z" />
                            </svg>
                            <div>Affordable fee structure</div>
                          </div>
                          <div className="Highlights_pointContainer__5_snP">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              className="Highlights_pointIcon__m_iYg"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 3l5 5-5 5-5-5 5-5z" />
                            </svg>
                            <div>
                              Readily available access to study material
                            </div>
                          </div>
                          <div className="Highlights_pointContainer__5_snP">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              className="Highlights_pointIcon__m_iYg"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 3l5 5-5 5-5-5 5-5z" />
                            </svg>
                            <div>Highly qualified and experienced faculty</div>
                          </div>
                          <div className="Highlights_pointContainer__5_snP">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 16 16"
                              className="Highlights_pointIcon__m_iYg"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 3l5 5-5 5-5-5 5-5z" />
                            </svg>
                            <div>
                              Diverse programmes including Arts, Science
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Courses"
                    >
                      <div className="courses_wrapper__5pXR3">
                        <div className="courses_container__c_BRe">
                          <h2 className="courses_heading__nCyjm">Courses</h2>
                          <p className="courses_course_college_name__Reg2z">
                            Explore online learning courses in
                            {/* */}U.P. Rajarshi Tandan Open University
                          </p>
                          <table className="courses_course_table__llAtE">
                            <thead style={{ background: "var(--dark-blue)" }}>
                              <tr className="courses_course_head__M4Cun">
                                <th>Courses</th>
                                <th style={{ textAlign: "center" }}>
                                  Fee Range
                                </th>
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online BA</td>
                                <td style={{ textAlign: "center" }}>₹ 13500</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online BLIS</td>
                                <td style={{ textAlign: "center" }}>₹ 28500</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online BSC</td>
                                <td style={{ textAlign: "center" }}>
                                  ₹ 24000-₹ 24600
                                </td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online BCA</td>
                                <td style={{ textAlign: "center" }}>₹ 39000</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online BCom</td>
                                <td style={{ textAlign: "center" }}>₹ null</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online BBA</td>
                                <td style={{ textAlign: "center" }}>₹ null</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online BEd</td>
                                <td style={{ textAlign: "center" }}>₹ 37000</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online BEd(SE)</td>
                                <td style={{ textAlign: "center" }}>₹ 50000</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online BFD</td>
                                <td style={{ textAlign: "center" }}>₹ 13500</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online B.Textile Design</td>
                                <td style={{ textAlign: "center" }}>₹ 13500</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online MA</td>
                                <td style={{ textAlign: "center" }}>₹ 17000</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online MSc</td>
                                <td style={{ textAlign: "center" }}>
                                  ₹ 16400-₹ 30000
                                </td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online MCA</td>
                                <td style={{ textAlign: "center" }}>₹ 34000</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online MBA</td>
                                <td style={{ textAlign: "center" }}>₹ 36000</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online MCom</td>
                                <td style={{ textAlign: "center" }}>₹ 16000</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online PhD</td>
                                <td style={{ textAlign: "center" }}>₹ null</td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online Diploma</td>
                                <td style={{ textAlign: "center" }}>
                                  ₹ 4200-₹ 12000
                                </td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online PG Diploma</td>
                                <td style={{ textAlign: "center" }}>
                                  ₹ 4200-₹ 8200
                                </td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                              <tr className="courses_tbody__ZPCxV">
                                <td>Online Certificate</td>
                                <td style={{ textAlign: "center" }}>
                                  ₹ 2200-₹ 6200
                                </td>
                                <td
                                  style={{ textAlign: "center" }}
                                  className="group_btn"
                                >
                                  <button
                                    className="courses_enqnow__8Vb3P"
                                    onClick={handleOpenModal}
                                  >
                                    Enquire Now
                                  </button>

                                  {/* Render Modal */}
                                  <EnquiryModel
                                    showModal={showModal}
                                    setShowModal={setShowModal}
                                  />
                                  <button className="courses_viewSpsl__lrjH5">
                                    View Specialization
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Course Eligibility"
                    >
                      <h2 className="courseEligibility_eligible_heading__5Qd_3">
                        Courses Eligibility
                      </h2>
                      <div className="courseEligibility_wrapper__WDP1x">
                        <table className="courseEligibility_eligible_table__ZvMdh">
                          <thead>
                            <tr className="courseEligibility_eligible_head__GsY_a">
                              <th>Courses</th>
                              <th>Eligibility</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online BA</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online BLIS</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online BSC</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online BCA</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online BCom</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online BBA</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online BEd</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online BEd(SE)</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online BFD</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online B.Textile Design</td>
                              <td>
                                12th pass from any stream from a recognised
                                instititution
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online MA</td>
                              <td>
                                Graduation or equivalent institution from a
                                recognized university
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online MSc</td>
                              <td>
                                Graduation or equivalent institution from a
                                recognized university
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online MCA</td>
                              <td>
                                Graduation or equivalent institution from a
                                recognized university
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online MBA</td>
                              <td>
                                Graduation or equivalent institution from a
                                recognized university
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online MCom</td>
                              <td>
                                Graduation or equivalent institution from a
                                recognized university
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online PhD</td>
                              <td>
                                Post-Graduation / M.Phil or equivalent degree
                                from an institution from a recognized university
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online Diploma</td>
                              <td>
                                Higher Secondary Examination (HSC) in any
                                discipline from any recognized university
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online PG Diploma</td>
                              <td>
                                Graduation in any discipline from any recognized
                                university
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online Certificate</td>
                              <td>
                                Higher Secondary Examination (HSC) in any
                                discipline from any recognized university
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Enquire Now"
                    >
                      <div className="collegenquiry_collegeform__wTRAT">
                        <h2 className="collegenquiry_form_heading__GszFG">
                          Get Free Career Consultation
                        </h2>
                        <div className="collegenquiry_form_div__RSaaQ">
                          <form className="collegenquiry_form__uF7mS">
                            <input
                              type="text"
                              placeholder="Name*"
                              name="name"
                            />
                            <input
                              type="email"
                              placeholder="Email*"
                              name="email"
                            />
                            <input
                              type="number"
                              placeholder="Phone*"
                              name="phone"
                            />
                            <select name="program">
                              <option value selected>
                                Choose a Program*
                              </option>
                              <option value="Online MBA">Online MBA</option>
                              <option value="Executive MBA">
                                Executive MBA
                              </option>
                              <option value="Online MCA">Online MCA</option>
                              <option value="Online MSC">Online MSC</option>
                              <option value="Online MCOM">Online MCOM</option>
                              <option value="Online MA">Online MA</option>
                              <option value="Online PGDM">Online PGDM</option>
                              <option value="Distance MEd">Distance MEd</option>
                              <option value="PG Diploma">PG Diploma</option>
                              <option value="Online BBA">Online BBA</option>
                              <option value="Online BCA">Online BCA</option>
                              <option value="Online BSC">Online BSC</option>
                              <option value="Online BCom">Online BCom</option>
                              <option value="Online BA">Online BA</option>
                              <option value="Distance BEd">Distance BEd</option>
                              <option value="IT Certifications">
                                IT Certifications
                              </option>
                              <option value="Help Me Decide">
                                Help Me Decide
                              </option>
                            </select>
                            <select name="state">
                              <option value selected>
                                State/Province
                              </option>
                              <option value="Arunachal Pradesh">
                                Arunachal Pradesh
                              </option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">
                                Himachal Pradesh
                              </option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Madhya Pradesh">
                                Madhya Pradesh
                              </option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="Uttar Pradesh">
                                Uttar Pradesh
                              </option>
                              <option value="West Bengal">West Bengal</option>
                            </select>
                            <button
                              type="submit"
                              className="collegenquiry_submit_btn__cjBuo"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Certification"
                    >
                      <div className="Certificates_wrapper__hjNB4">
                        <div className="Certificates_container__X9Jsj">
                          <div className="Certificates_detail_img_container__jHvTy">
                            <div>
                              <h2 className="Certificates_heading__Jr9Js">
                                Sample Certificate
                              </h2>
                              <div className="Certificates_subHeading__CKwq6">
                                Earn a degree that is recognized around the
                                globe
                              </div>
                              <div>
                                <div className="Certificates_pointBox__xwwq4">
                                  <img
                                    alt="check-image"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    srcSet="
                            image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            /assets/simpli-images/check.webp 2x
                          "
                                    src="/assets/simpli-images/check.webp"
                                  />
                                  <div className="Certificates_point__XYWLq">
                                    Emphasis on research and academic excellence
                                  </div>
                                </div>
                                <div className="Certificates_pointBox__xwwq4">
                                  <img
                                    alt="check-image"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    srcSet="
                            image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            /assets/simpli-images/check.webp 2x
                          "
                                    src="/assets/simpli-images/check.webp"
                                  />
                                  <div className="Certificates_point__XYWLq">
                                    Career-ready Courses
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              {/* <img
                                alt="certificate_url"
                                loading="lazy"
                                width={300}
                                height={200}
                                decoding="async"
                                data-nimg={1}
                                className="Certificates_img__GOe9v"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FUP-Rajarshi-Tandan-Open-University%2Fcertification%2Fno-img.webp&w=384&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FUP-Rajarshi-Tandan-Open-University%2Fcertification%2Fno-img.webp&w=640&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FUP-Rajarshi-Tandan-Open-University%2Fcertification%2Fno-img.webp&w=640&q=75"
                              /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Admission"
                    >
                      <div className="Admissions_container__lpKQv">
                        <h2 className="Admissions_heading__paqsP">
                          Admission Process
                        </h2>
                        <p className="Admissions_description__sKdUj">
                          The admissions process takes place in online mode.
                          Fresh admission starts from the month of January of
                          every year. There are direct admissions, no entrance
                          exam is conducted for the admission process.The
                          addmission procedure
                          {/* */}2025{/* */}
                          for the online course at
                          {/* */}U.P. Rajarshi Tandan Open University{/* */}
                          is as follow:
                        </p>
                        <div className="Admissions_step__4mDzm">
                          <div className="Admissions_stepCount__f9yhl">
                            STEP
                            {/* */}1
                          </div>
                          <div className="Admissions_stepText___L_GT">
                            Open the official website of the college.
                          </div>
                        </div>
                        <div className="Admissions_step__4mDzm">
                          <div className="Admissions_stepCount__f9yhl">
                            STEP
                            {/* */}2
                          </div>
                          <div className="Admissions_stepText___L_GT">
                            Click on the application form and fill out the
                            personal details correctly.
                          </div>
                        </div>
                        <div className="Admissions_step__4mDzm">
                          <div className="Admissions_stepCount__f9yhl">
                            STEP
                            {/* */}3
                          </div>
                          <div className="Admissions_stepText___L_GT">
                            Upload all necessary documents and select the course
                            you want to pursue.
                          </div>
                        </div>
                        <div className="Admissions_step__4mDzm">
                          <div className="Admissions_stepCount__f9yhl">
                            STEP
                            {/* */}4
                          </div>
                          <div className="Admissions_stepText___L_GT">
                            Pay the fees for the course and you shalll be
                            admitted to the course once the admission is
                            confirmed.
                          </div>
                        </div>
                        <div className="Admissions_stepHide__nIt_6" />
                      </div>
                    </div>
                    <div
                      className="collegeDetails_maxWidth__6vBVL"
                      id="Placement"
                    >
                      <div className="placement_container__iALXL">
                        <div>
                          <h2 className="placement_heading__iEHZj">
                            Online Placement Partners
                          </h2>
                          <h3 className="placement_subHeading__1vY2G">
                            Our students have an opportunity of
                          </h3>
                          <div className="placementSubpoint_subHeadingPoints__uE7MR">
                            <img
                              alt="img"
                              loading="lazy"
                              width={20}
                              height={20}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="
                      image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      /assets/simpli-images/check.webp 2x
                    "
                              src="/assets/simpli-images/check.webp"
                            />
                            <p>
                              Learn employability skills through assessments and
                              tests
                            </p>
                          </div>
                          <div className="placementSubpoint_subHeadingPoints__uE7MR">
                            <img
                              alt="img"
                              loading="lazy"
                              width={20}
                              height={20}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="
                      image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      /assets/simpli-images/check.webp 2x
                    "
                              src="/assets/simpli-images/check.webp"
                            />
                            <p>Top recruiters from leading Companies</p>
                          </div>
                          <div className="placementSubpoint_subHeadingPoints__uE7MR">
                            <img
                              alt="img"
                              loading="lazy"
                              width={20}
                              height={20}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="
                      image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      /assets/simpli-images/check.webp 2x
                    "
                              src="/assets/simpli-images/check.webp"
                            />
                            <p>Job that suitably fits the student profile</p>
                          </div>
                        </div>
                        <div className="placement_placementBanner__ACCRS">
                          <div className="placementBanner_container__upl7e">
                            <p className="placementBanner_heading__yGlah">
                              ₹ NaN LPA
                            </p>
                            <p className="placementBanner_description__O3FqH">
                              Average Salary
                            </p>
                          </div>
                          <div className="placementBanner_container__upl7e">
                            <p className="placementBanner_heading__yGlah">
                              ₹ NaN LPA
                            </p>
                            <p className="placementBanner_description__O3FqH">
                              Highest Salary
                            </p>
                          </div>
                          <div className="placementBanner_container__upl7e">
                            <p className="placementBanner_heading__yGlah">3x</p>
                            <p className="placementBanner_description__O3FqH">
                              Interview Opportunities
                            </p>
                          </div>
                        </div>
                        <div className="partners_container___c9cx" />
                      </div>
                    </div>
                    <div className="collegeDetails_maxWidth__6vBVL" id="Review">
                      <div
                        className="CollegeReview_college_page_details_review_container__KbbIU"
                        id="contact"
                      >
                        <h2 className="CollegeReview_college_page_details_review_heading__7gRVc">
                          U.P. Rajarshi Tandan Open University{/* */}
                          Review
                        </h2>
                        <div>
                          <form>
                            <div className="CollegeReview_college_page_details_review_form_container__rP5km">
                              <div className="CollegeReview_college_page_details_review_form_rating_count_img_container__SDJGd">
                                <p className="CollegeReview_college_page_details_review_form_rating_count__oLqL0">
                                  0{/* */}
                                  out of 5
                                </p>
                                <div>
                                  <span className="star">
                                    <img
                                      alt="rating"
                                      loading="lazy"
                                      width={400}
                                      height={400}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                      style={{ color: "transparent" }}
                                      srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                      src="/assets/simpli-images/Star-Two.webp"
                                    />
                                  </span>
                                  <span className="star">
                                    <img
                                      alt="rating"
                                      loading="lazy"
                                      width={400}
                                      height={400}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                      style={{ color: "transparent" }}
                                      srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                      src="/assets/simpli-images/Star-Two.webp"
                                    />
                                  </span>
                                  <span className="star">
                                    <img
                                      alt="rating"
                                      loading="lazy"
                                      width={400}
                                      height={400}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                      style={{ color: "transparent" }}
                                      srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                      src="/assets/simpli-images/Star-Two.webp"
                                    />
                                  </span>
                                  <span className="star">
                                    <img
                                      alt="rating"
                                      loading="lazy"
                                      width={400}
                                      height={400}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                      style={{ color: "transparent" }}
                                      srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                      src="/assets/simpli-images/Star-Two.webp"
                                    />
                                  </span>
                                  <span className="star">
                                    <img
                                      alt="rating"
                                      loading="lazy"
                                      width={400}
                                      height={400}
                                      decoding="async"
                                      data-nimg={1}
                                      className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                      style={{ color: "transparent" }}
                                      srcSet="
                              image?url=%2Fimages%2FStarTwo.png&w=640&q=75 1x,
                              /assets/simpli-images/Star-Two.webp 2x
                            "
                                      src="/assets/simpli-images/Star-Two.webp"
                                    />
                                  </span>
                                </div>
                              </div>
                              <div className="CollegeReview_rating_form_container__q_Xvp">
                                <input
                                  className="CollegeReview_reviewer_name__Fdlnr"
                                  type="text"
                                  placeholder="Enter your name"
                                  required
                                  name="reviewerName"
                                />
                                <textarea
                                  placeholder="Write your reviews"
                                  className="CollegeReview_college_page_details_review_form_input__niDf2"
                                  name="comment"
                                  required
                                  defaultValue={""}
                                />
                                <button className="CollegeReview_college_page_details_review_form_btn__xh_Sn">
                                  Send message
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="CollegeReview_college_page_details_verified_review_container__m7rGG" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
