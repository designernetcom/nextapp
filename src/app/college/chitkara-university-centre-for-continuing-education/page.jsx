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
        <div>
          <div className="headCarousal_collegeCarousal__4a5Bq">
            <img
              src="https://store.learningroutes.in/images/colleges/chitkara-university-centre-for-continuing-education/hero-image/chitkarabanner.webp"
              fetchPriority="high"
              className="headCarousal_clg_banner__CXazi"
              alt="hero-image"
              width={240}
              height={240}
            />
            <div className="headCarousal_gradientOverlayStyle__DEkSg" />
            <div className="headCarousal_collegeHeadingContainer__E4uDz">
              <nav class="Breadcrumb_breadcrumb__j1UHX">
                <span class="Breadcrumb_breadcrumbItem__lnXIo">
                  <a class="Breadcrumb_link__zmGnw" href="/">
                    Home
                  </a>
                  <span class="Breadcrumb_separator__e7M6o">/</span>
                </span>
                <span class="Breadcrumb_breadcrumbItem__lnXIo">
                  <a class="Breadcrumb_link__zmGnw" href="/top-university">
                    Colleges
                  </a>
                  <span class="Breadcrumb_separator__e7M6o">/</span>
                </span>
                <span class="Breadcrumb_breadcrumbItem__lnXIo">
                  <span>
                    {" "}
                    Chitkara University Centre for Continuing Education
                  </span>
                </span>
              </nav>
              <h1 className="headCarousal_collegeHeading__KBbuL">
                Chitkara University Centre for Continuing Education
              </h1>
              <p className="headCarousal_location__7rFlL">
                Rajpura{/* */},{/* */}Punjab
              </p>
              <p className="headCarousal_ranking__1yTOY">NIRF Rank: 90</p>
              <div className="headCarousal_accreditation__HUqxZ">
                <img
                  src="https://store.learningroutes.in/images/colleges/chitkara-university-centre-for-continuing-education/accreditations/UGC.webp"
                  alt="accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
                <img
                  src="https://store.learningroutes.in/images/colleges/chitkara-university-centre-for-continuing-education/accreditations/NAAC A+.webp"
                  alt="accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
                <img
                  src="https://store.learningroutes.in/images/colleges/chitkara-university-centre-for-continuing-education/accreditations/AICTE.webp"
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
                          Chitkara University Centre for Continuing Education
                        </h2>
                        <p className="about_collegeDetailsDescription__7Swyd">
                          Established by the Chitkara Educational Trust in 2002,
                          Chitkara University is now regarded as one of the best
                          private universities in the North India region. With a
                          student-centric approach, the university offers
                          various multi-disciplinary programmes. The university
                          is ranked in the prestigious QS University Rankings,
                          which makes their degrees extremely credible in the
                          global sector. Keeping in mind the current needs of
                          the students and expanding the scope of higher
                          education, the university initiated online programmes
                          entitled by UGC for MBA aspirants. The online MBA
                          programmes from Chitkara University Centre for
                          Continuing Education offer a diverse range of
                          specialisations that are highly in demand. Its MBA
                          programmes are designed with the motto to boost
                          entrepreneurship and develop cutting-edge leadership
                          qualities in the students.
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
                            <div>Extensive Alumni Network</div>
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
                            <div>Industry-Endorsed Curriculum</div>
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
                            <div>500+ Hiring Partners</div>
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
                            <div>Live &amp; Recorded Lectures</div>
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
                              Learn from Industry Stalwarts and World-Renowned
                              Academicians
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
                            <div>Engaging Course Content</div>
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
                            <div>Global Summits &amp; Exchange Programmes</div>
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
                            <div>Access to Courses from LinkedIn Learning</div>
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
                              Case Studies from Harvard Business Publishing
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
                            <div>Start-Up Assistance</div>
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
                            <div>MasterClass Library</div>
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
                            {/* */}Chitkara University Centre for Continuing
                            Education
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
                                <td>Online MBA</td>
                                <td style={{ textAlign: "center" }}>
                                  ₹ 205000-₹ 305000
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
                              <td>Online MBA</td>
                              <td>
                                Graduate in any field from a recognised
                                university (Must have completed graduation 2
                                years prior to the date of application)
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
                                Earn an UGC entitled degree, recognized around
                                the globe
                              </div>
                              <div>
                                <div className="Certificates_pointBox__xwwq4">
                                  {/* <img
                                    alt="check-image"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    srcSet="
                            image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                          "
                                    src="image?url=%2Fimages%2Fcheck.png&w=48&q=75"
                                  /> */}
                                  <div className="Certificates_point__XYWLq">
                                    NAAC A+ Recognised
                                  </div>
                                </div>
                                <div className="Certificates_pointBox__xwwq4">
                                  {/* <img
                                    alt="check-image"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    srcSet="
                            image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                          "
                                    src="image?url=%2Fimages%2Fcheck.png&w=48&q=75"
                                  /> */}
                                  <div className="Certificates_point__XYWLq">
                                    AICTE Approved
                                  </div>
                                </div>
                                <div className="Certificates_pointBox__xwwq4">
                                  {/* <img
                                    alt="check-image"
                                    loading="lazy"
                                    width={20}
                                    height={20}
                                    decoding="async"
                                    data-nimg={1}
                                    style={{ color: "transparent" }}
                                    srcSet="
                            image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                            image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                          "
                                    src="image?url=%2Fimages%2Fcheck.png&w=48&q=75"
                                  /> */}
                                  <div className="Certificates_point__XYWLq">
                                    NIRF- 151-200 (Overall Category)
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
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fcertification%2Fchitkara-university-sample-certificate.webp&w=384&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fcertification%2Fchitkara-university-sample-certificate.webp&w=640&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fcertification%2Fchitkara-university-sample-certificate.webp&w=640&q=75"
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
                          {/* */}Chitkara University Centre for Continuing
                          Education{/* */}
                          is as follow:
                        </p>
                        <div className="Admissions_step__4mDzm">
                          <div className="Admissions_stepCount__f9yhl">
                            STEP
                            {/* */}1
                          </div>
                          <div className="Admissions_stepText___L_GT">
                            Visit the online application portal
                          </div>
                        </div>
                        <div className="Admissions_step__4mDzm">
                          <div className="Admissions_stepCount__f9yhl">
                            STEP
                            {/* */}2
                          </div>
                          <div className="Admissions_stepText___L_GT">
                            Fill out the online application form on the official
                            website
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
                            {/* <img
                              alt="img"
                              loading="lazy"
                              width={20}
                              height={20}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="
                      image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                    "
                              src="image?url=%2Fimages%2Fcheck.png&w=48&q=75"
                            /> */}
                            <p>
                              Learn employability skills through assessments and
                              tests
                            </p>
                          </div>
                          <div className="placementSubpoint_subHeadingPoints__uE7MR">
                            {/* <img
                              alt="img"
                              loading="lazy"
                              width={20}
                              height={20}
                              decoding="async"
                              data-nimg={1}
                              style={{ color: "transparent" }}
                              srcSet="
                      image?url=%2Fimages%2Fcheck.png&w=32&q=75 1x,
                      image?url=%2Fimages%2Fcheck.png&w=48&q=75 2x
                    "
                              src="image?url=%2Fimages%2Fcheck.png&w=48&q=75"
                            /> */}
                            <p>Job that suitably fits the student profile</p>
                          </div>
                        </div>
                        <div className="placement_placementBanner__ACCRS">
                          <div className="placementBanner_container__upl7e">
                            <p className="placementBanner_heading__yGlah">
                              ₹ 6 LPA
                            </p>
                            <p className="placementBanner_description__O3FqH">
                              Average Salary
                            </p>
                          </div>
                          <div className="placementBanner_container__upl7e">
                            <p className="placementBanner_heading__yGlah">
                              ₹ 37 LPA
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
                        {/* <h3 className="placement_heading__iEHZj">
                          Our Students Work At
                        </h3>
                        <div className="partners_container___c9cx">
                          <div>
                            <div className="partners_imgBox__yD_6o">
                              <img
                                alt="placement-logo"
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2Famazon.webp&w=128&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2Famazon.webp&w=256&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2Famazon.webp&w=256&q=75"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="partners_imgBox__yD_6o">
                              <img
                                alt="placement-logo"
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FDeloitte.webp&w=128&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FDeloitte.webp&w=256&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FDeloitte.webp&w=256&q=75"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="partners_imgBox__yD_6o">
                              <img
                                alt="placement-logo"
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FAdani.webp&w=128&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FAdani.webp&w=256&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FAdani.webp&w=256&q=75"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="partners_imgBox__yD_6o">
                              <img
                                alt="placement-logo"
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FJP-Morgan_.webp&w=128&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FJP-Morgan_.webp&w=256&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FJP-Morgan_.webp&w=256&q=75"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="partners_imgBox__yD_6o">
                              <img
                                alt="placement-logo"
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FLT.webp&w=128&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FLT.webp&w=256&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FLT.webp&w=256&q=75"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="partners_imgBox__yD_6o">
                              <img
                                alt="placement-logo"
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FNestle%CC%81.webp&w=128&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FNestle%CC%81.webp&w=256&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FNestle%CC%81.webp&w=256&q=75"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="partners_imgBox__yD_6o">
                              <img
                                alt="placement-logo"
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2Fabott.webp&w=128&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2Fabott.webp&w=256&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2Fabott.webp&w=256&q=75"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="partners_imgBox__yD_6o">
                              <img
                                alt="placement-logo"
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FReliance-Industries-Limited.webp&w=128&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FReliance-Industries-Limited.webp&w=256&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FReliance-Industries-Limited.webp&w=256&q=75"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="partners_imgBox__yD_6o">
                              <img
                                alt="placement-logo"
                                fetchPriority="high"
                                width={122}
                                height={95}
                                decoding="async"
                                data-nimg={1}
                                className="partners_plac_img__htNsk"
                                style={{ color: "transparent" }}
                                srcSet="
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FGSK.webp&w=128&q=75 1x,
                        image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FGSK.webp&w=256&q=75 2x
                      "
                                src="image?url=https%3A%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2Fchitkara-university-centre-for-continuing-education%2Fplacement-partners%2FGSK.webp&w=256&q=75"
                              />
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    {/* <div className="collegeDetails_maxWidth__6vBVL" id="Review">
                      <div
                        className="CollegeReview_college_page_details_review_container__KbbIU"
                        id="contact"
                      >
                        <h2 className="CollegeReview_college_page_details_review_heading__7gRVc">
                          Chitkara University Centre for Continuing Education
                         
                          Review
                        </h2>
                        <div>
                          <form>
                            <div className="CollegeReview_college_page_details_review_form_container__rP5km">
                              <div className="CollegeReview_college_page_details_review_form_rating_count_img_container__SDJGd">
                                <p className="CollegeReview_college_page_details_review_form_rating_count__oLqL0">
                                  0
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
                              image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            "
                                      src="image?url=%2Fimages%2FStarTwo.png&w=828&q=75"
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
                              image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            "
                                      src="image?url=%2Fimages%2FStarTwo.png&w=828&q=75"
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
                              image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            "
                                      src="image?url=%2Fimages%2FStarTwo.png&w=828&q=75"
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
                              image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            "
                                      src="image?url=%2Fimages%2FStarTwo.png&w=828&q=75"
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
                              image?url=%2Fimages%2FStarTwo.png&w=828&q=75 2x
                            "
                                      src="image?url=%2Fimages%2FStarTwo.png&w=828&q=75"
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
                    </div> */}
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
