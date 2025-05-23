"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { debounce } from "lodash";
import SecondMenu from "../../../../components/Header/Menu/SecondMenu";
import Footer from "../../../../components/Footer/Footer";
import FirstVisitModal from "../../../../components/FirstVisitModal";
import "../../styles/5107c2122129e0bb.css";
import "../../styles/style.css";
import "../../styles/3a6b4218bb14b3ef.css";
import "../../styles/bootstrap.min.css";
import "../../styles/33f1be5fd79e728d.css";
import "../../styles/cc66cf431efece60.css";
import "../../styles/bcdb44b6ad772c90.css";
import "../../styles/ecbb68b163419596.css";
import "../../styles/e74b165e0d429359.css";
import "../../styles/8c8030bf7e3ee32c.css";

export default function Page() {
  const [activeSection, setActiveSection] = useState("About");
  const [isModalOpen, setIsModalOpen] = useState(false); // For FirstVisitModal
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false); // For Courses Enquire Now modal
  const [isSpecializationModalOpen, setIsSpecializationModalOpen] =
    useState(false); // For Specialization modal
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    state: "",
  });
  const [reviewData, setReviewData] = useState({
    reviewerName: "",
    comment: "",
  });
  const [selectedCourseSpecializations, setSelectedCourseSpecializations] =
    useState([]);
  const [selectedCourseName, setSelectedCourseName] = useState("");
  const [isLoading, setIsLoading] = useState(false); // For form submission loading state

  const courseSpecializations = {
    "Online MBA": [
      { name: "Finance", fees: 500000 },
      { name: "Marketing", fees: 500000 },
      { name: "Data Analytics", fees: 500000 },
    ],
    "Online DSAB": [
      { name: "Data Science", fees: 141600 },
      { name: "Business Analytics", fees: 141600 },
    ],
  };

  // Calculate fee range dynamically
  const getFeeRange = (courseName) => {
    const fees =
      courseSpecializations[courseName]?.map((spec) => spec.fees) || [];
    if (fees.length === 0) return "N/A";
    const min = Math.min(...fees);
    const max = Math.max(...fees);
    return min === max
      ? `₹ ${min.toLocaleString()}`
      : `₹ ${min.toLocaleString()}-₹ ${max.toLocaleString()}`;
  };

  useEffect(() => {
    const sections = [
      "About",
      "High",
      "Courses",
      "Course Eligibility",
      "Enquire Now",
      "Certification",
      "Admission",
      "Placement",
      "Review",
    ];

    const handleScroll = debounce(() => {
      let currentSection = "About";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsCourseModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      program: "",
      state: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Invalid email format");
      return;
    }
    setIsLoading(true);
    try {
      // Placeholder for API call
      console.log("Form submitted:", formData);
      // Example: await fetch("/api/enquire", { method: "POST", body: JSON.stringify(formData) });
      handleClose();
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      program: form.program.value,
      state: form.state.value,
    };
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      alert("Invalid email format");
      return;
    }
    setIsLoading(true);
    try {
      // Placeholder for API call
      console.log("Enquiry submitted:", data);
      form.reset();
      setFormData({ name: "", email: "", phone: "", program: "", state: "" });
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!reviewData.reviewerName || !reviewData.comment) {
      alert("Please fill out all fields");
      return;
    }
    setIsLoading(true);
    try {
      // Placeholder for API call
      console.log("Review submitted:", reviewData);
      setReviewData({ reviewerName: "", comment: "" });
    } catch (error) {
      alert("Error submitting review");
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewSpecialization = (courseName) => {
    setSelectedCourseName(courseName);
    setSelectedCourseSpecializations(courseSpecializations[courseName] || []);
    setIsSpecializationModalOpen(true);
  };

  const handleCloseSpecializationModal = () => {
    setIsSpecializationModalOpen(false);
    setSelectedCourseSpecializations([]);
    setSelectedCourseName("");
  };

  return (
    <>
      <Head>
        <title>
          Academy of Continuing Education, Shiv Nadar University - Courses &
          Admissions
        </title>
        <meta
          name="description"
          content="Explore online degree programs at the Academy of Continuing Education, Shiv Nadar University, including Online MBA and Data Science & Analytics for Business."
        />
      </Head>
      <SecondMenu />
      <div>

        <div>
          <div className="headCarousal_collegeCarousal__4a5Bq">
            <Image
              src="https://store.learningroutes.in/images/colleges/Academy-of-Continuing-Education-Shiv-Nadar-University/hero-image/banner.webp"
              fetchPriority="high"
              className="headCarousal_clg_banner__CXazi"
              alt="Academy of Continuing Education, Shiv Nadar University campus banner"
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
                    Academy of Continuing Education, Shiv Nadar University
                  </span>
                </span>
              </nav>
              <h1 className="headCarousal_collegeHeading__KBbuL">
                Academy of Continuing Education, Shiv Nadar University
              </h1>
              <p className="headCarousal_location__7rFlL">
                Greater Noida, Uttar Pradesh
              </p>
              <p className="headCarousal_ranking__1yTOY">NIRF Rank: 95</p>
              <div className="headCarousal_accreditation__HUqxZ">
                <Image
                  src="https://store.learningroutes.in/images/colleges/Academy-of-Continuing-Education-Shiv-Nadar-University/accreditations/NAAC A.webp"
                  alt="NAAC A accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://store.learningroutes.in/images/colleges/Academy-of-Continuing-Education-Shiv-Nadar-University/accreditations/UGC_DEB.webp"
                  alt="UGC DEB accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
                <Image
                  src="https://store.learningroutes.in/images/colleges/Academy-of-Continuing-Education-Shiv-Nadar-University/accreditations/aicte.webp"
                  alt="AICTE accreditation"
                  className="headCarousal_accImg__NoM8M"
                  width={20}
                  height={20}
                />
              </div>
              <div className="headCarousal_proceedCompareContainer__rekWb">
                <a href="/top-university">
                  <button
                    className="headCarousal_collegeCompare__znhHH"
                    aria-label="Add to compare"
                  >
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
                    {[
                      { id: "About", text: "About" },
                      { id: "High", text: "Highlights" },
                      { id: "Courses", text: "Courses" },
                      { id: "Course Eligibility", text: "Course Eligibility" },
                      { id: "Enquire Now", text: "Enquire Now" },
                      { id: "Certification", text: "Certifications" },
                      { id: "Admission", text: "Admission Procedure" },
                      { id: "Placement", text: "Placement" },
                      { id: "Review", text: "Review" },
                    ].map((item) => (
                      <a
                        key={item.id}
                        className="collegeDetails_scrollerElement__iuUFa"
                        id={`link-${item.id}`}
                        href={
                          item.id !== "Enquire Now" ? `#${item.id}` : undefined
                        }
                        onClick={
                          item.id === "Enquire Now" ? openModal : undefined
                        }
                      >
                        <div
                          className={`collegeDetails_sectionBox__ZGGBm ${
                            activeSection === item.id
                              ? "collegeDetails_selectedBox___Y1P_ collegeDetails_textWhite__q6ndV"
                              : "collegeDetails_textBlack__LRxI5"
                          }`}
                        >
                          {item.id === "Enquire Now" ? (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                              }}
                            >
                              <div>{item.text}</div>
                              <div className="college_blink__yxq74" />
                            </div>
                          ) : (
                            item.text
                          )}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="collegeDetails_detailsContainer__6A8oL">
                    <div className="collegeDetails_maxWidth__6vBVL" id="About">
                      <div className="about_collegeDetails__67FzM">
                        <h2 className="about_collegeDetailsHeading__AA_dr">
                          Academy of Continuing Education, Shiv Nadar University
                        </h2>
                        <p className="about_collegeDetailsDescription__7Swyd">
                          Shiv Nadar Institute of Eminence Deemed to be
                          University was established in 2011 and is regarded as
                          a multidisciplinary and student-centric research
                          university. To give proper attention to its students,
                          they have maintained a low student-faculty ratio.
                          Through its online/hybrid learning format, the
                          institution allows students to expand their
                          professional network with industry leaders and peer
                          groups. Its programs include modern teaching pedagogy
                          with live projects, case studies, tutorials, etc.
                        </p>
                      </div>
                    </div>
                    <div className="collegeDetails_maxWidth__6vBVL" id="High">
                      <div className="Highlights_container__yqw8t">
                        <h2 className="Highlights_heading__QnGK2">
                          Highlights
                        </h2>
                        <div className="Highlights_grid__zFaon">
                          {[
                            "Live interactive lectures on weekends",
                            "Simulations and capstone projects with real business scenarios",
                            "Learning support to help continued learning beyond live sessions",
                            "Self-study materials and recorded tutorials for learning at own pace & time",
                            "Assignments and quizzes to test your knowledge",
                          ].map((highlight, index) => (
                            <div
                              className="Highlights_pointContainer__5_snP"
                              key={index}
                            >
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
                              <div>{highlight}</div>
                            </div>
                          ))}
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
                            Explore online learning courses in Academy of
                            Continuing Education, Shiv Nadar University
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
                              {[
                                {
                                  name: "Online MBA",
                                  feeRange: getFeeRange("Online MBA"),
                                },
                                {
                                  name: "Online DSAB",
                                  feeRange: getFeeRange("Online DSAB"),
                                },
                              ].map((course, index) => (
                                <tr
                                  className="courses_tbody__ZPCxV"
                                  key={index}
                                >
                                  <td>{course.name}</td>
                                  <td style={{ textAlign: "center" }}>
                                    {course.feeRange}
                                  </td>
                                  <td
                                    style={{ textAlign: "center" }}
                                    className="group_btn"
                                  >
                                    <button
                                      className="courses_enqnow__8Vb3P"
                                      onClick={() => setIsCourseModalOpen(true)}
                                      aria-label={`Enquire about ${course.name}`}
                                    >
                                      Enquire Now
                                    </button>
                                    <button
                                      className="courses_viewSpsl__lrjH5"
                                      onClick={() =>
                                        handleViewSpecialization(course.name)
                                      }
                                      aria-label={`View specializations for ${course.name}`}
                                    >
                                      View Specialization
                                    </button>
                                  </td>
                                </tr>
                              ))}
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
                        Course Eligibility
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
                                Applicants must hold a bachelor's degree or
                                equivalent with at least 50% marks or equivalent
                                CGPA from a UGC-recognized university. Graduates
                                with professional working experience shall be
                                preferred. Students in the final year of
                                graduation can apply to the course after signing
                                the required declaration. GMAT accepted.
                              </td>
                            </tr>
                            <tr className="courseEligibility_eligible_tbody__q_tOM">
                              <td>Online DSAB</td>
                              <td>
                                Candidate must hold a bachelor's degree or
                                equivalent or must be enrolled in any recognized
                                undergraduate degree program, with at least 50%
                                marks or equivalent CGPA from any recognized
                                university or from a professional body including
                                ICAI, ICSI, ICWAI, etc. Candidate must have
                                studied Mathematics in 10+2 board examination.
                                Entry-level professionals who aspire for a
                                career in Data Science can apply for the
                                program. Selection will be based on application
                                credentials and admission office interactions.
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
                          <form
                            className="collegenquiry_form__uF7mS"
                            onSubmit={handleEnquirySubmit}
                          >
                            <input
                              type="text"
                              placeholder="Name*"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="email"
                              placeholder="Email*"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                            <input
                              type="number"
                              placeholder="Phone*"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                            <select
                              name="program"
                              value={formData.program}
                              onChange={handleChange}
                              required
                            >
                              <option value="">Choose a Program*</option>
                              <option value="Online MBA">Online MBA</option>
                              <option value="Online DSAB">Online DSAB</option>
                              <option value="Help Me Decide">
                                Help Me Decide
                              </option>
                            </select>
                            <select
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              required
                            >
                              <option value="">State/Province*</option>
                              {[
                                "Arunachal Pradesh",
                                "Assam",
                                "Bihar",
                                "Chhattisgarh",
                                "Delhi",
                                "Goa",
                                "Gujarat",
                                "Haryana",
                                "Himachal Pradesh",
                                "Jharkhand",
                                "Karnataka",
                                "Kerala",
                                "Madhya Pradesh",
                                "Maharashtra",
                                "Manipur",
                                "Meghalaya",
                                "Mizoram",
                                "Nagaland",
                                "Odisha",
                                "Punjab",
                                "Rajasthan",
                                "Sikkim",
                                "Tamil Nadu",
                                "Telangana",
                                "Tripura",
                                "Uttarakhand",
                                "Uttar Pradesh",
                                "West Bengal",
                              ].map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </select>
                            <button
                              type="submit"
                              className="collegenquiry_submit_btn__cjBuo"
                              disabled={isLoading}
                            >
                              {isLoading ? "Submitting..." : "Submit"}
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
                                The University has established a credible
                                educational status
                              </div>
                              <div>
                                {[
                                  "A degree from an eminent institute",
                                  "UGC-recognized programs",
                                  "Flexible learning with campus residency feature",
                                ].map((point, index) => (
                                  <div
                                    className="Certificates_pointBox__xwwq4"
                                    key={index}
                                  >
                                    <Image
                                      alt="Check icon"
                                      loading="lazy"
                                      width={20}
                                      height={20}
                                      decoding="async"
                                      data-nimg={1}
                                      style={{ color: "transparent" }}
                                      src="/assets/simpli-images/check.webp"
                                    />
                                    <div className="Certificates_point__XYWLq">
                                      {point}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              {/* <Image
                                alt="Shiv Nadar University sample degree certificate"
                                loading="lazy"
                                width={300}
                                height={200}
                                decoding="async"
                                data-nimg={1}
                                className="Certificates_img__GOe9v"
                                style={{ color: "transparent" }}
                                src="/assets/course/shiv-nadar-degree.png"
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
                          The admission process takes place online. Fresh
                          admissions start in January every year. There are
                          direct admissions, and no entrance exam is conducted.
                          The admission procedure for 2025 for the online
                          courses at Academy of Continuing Education, Shiv Nadar
                          University is as follows:
                        </p>
                        {[
                          "Fill the application form",
                          "Upload the documents",
                          "Pay the program fees",
                          "Admission confirmed",
                        ].map((step, index) => (
                          <div className="Admissions_step__4mDzm" key={index}>
                            <div className="Admissions_stepCount__f9yhl">
                              STEP {index + 1}
                            </div>
                            <div className="Admissions_stepText___L_GT">
                              {step}
                            </div>
                          </div>
                        ))}
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
                            The University provides placement assistance in Data
                            Science and Analytics for Business
                          </h3>
                          {[
                            "Placement assistance for all applicants",
                            "Career-focused learning material",
                            "A wide range of placement partners",
                          ].map((point, index) => (
                            <div
                              className="placementSubpoint_subHeadingPoints__uE7MR"
                              key={index}
                            >
                              <Image
                                alt="Check icon"
                                loading="lazy"
                                width={20}
                                height={20}
                                decoding="async"
                                data-nimg={1}
                                style={{ color: "transparent" }}
                                src="/assets/simpli-images/check.webp"
                              />
                              <p>{point}</p>
                            </div>
                          ))}
                        </div>
                        <div className="placement_placementBanner__ACCRS">
                          <div className="placementBanner_container__upl7e">
                            <p className="placementBanner_heading__yGlah">
                              ₹ 10 LPA
                            </p>
                            <p className="placementBanner_description__O3FqH">
                              Average Salary
                            </p>
                          </div>
                          <div className="placementBanner_container__upl7e">
                            <p className="placementBanner_heading__yGlah">
                              ₹ 18 LPA
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
                      </div>
                    </div>
                    {/* <div className="collegeDetails_maxWidth__6vBVL" id="Review">
                      <div
                        className="CollegeReview_college_page_details_review_container__KbbIU"
                        id="contact"
                      >
                        <h2 className="CollegeReview_college_page_details_review_heading__7gRVc">
                          Academy of Continuing Education, Shiv Nadar University
                          Review
                        </h2>
                        <div>
                          <form onSubmit={handleReviewSubmit}>
                            <div className="CollegeReview_college_page_details_review_form_container__rP5km">
                              <div className="CollegeReview_college_page_details_review_form_rating_count_img_container__SDJGd">
                                <p className="CollegeReview_college_page_details_review_form_rating_count__oLqL0">
                                  0 out of 5
                                </p>
                                <div>
                                  {Array(5)
                                    .fill()
                                    .map((_, index) => (
                                      <span className="star" key={index}>
                                        <Image
                                          alt="Star rating"
                                          loading="lazy"
                                          width={20}
                                          height={20}
                                          decoding="async"
                                          data-nimg={1}
                                          className="CollegeReview_college_page_details_review_form_rating_img__h_Yj7"
                                          style={{ color: "transparent" }}
                                          src="/assets/simpli-images/Star-Two.webp"
                                        />
                                      </span>
                                    ))}
                                </div>
                              </div>
                              <div className="CollegeReview_rating_form_container__q_Xvp">
                                <input
                                  className="CollegeReview_reviewer_name__Fdlnr"
                                  type="text"
                                  placeholder="Enter your name"
                                  required
                                  name="reviewerName"
                                  value={reviewData.reviewerName}
                                  onChange={handleReviewChange}
                                />
                                <textarea
                                  placeholder="Write your reviews"
                                  className="CollegeReview_college_page_details_review_form_input__niDf2"
                                  name="comment"
                                  required
                                  value={reviewData.comment}
                                  onChange={handleReviewChange}
                                />
                                <button
                                  className="CollegeReview_college_page_details_review_form_btn__xh_Sn"
                                  disabled={isLoading}
                                >
                                  {isLoading ? "Submitting..." : "Send message"}
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
      {isModalOpen && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-4">
                <button
                  className="btn-close position-absolute top-0 end-0 m-3"
                  onClick={closeModal}
                  aria-label="Close first visit modal"
                ></button>
                <FirstVisitModal closeModal={closeModal} />
              </div>
            </div>
          </div>
        </div>
      )}
      {isCourseModalOpen && (
        <div
          className="modal fade show d-block"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="false"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-4">
                <div className="td_form_card_in position-relative">
                  <button
                    type="button"
                    className="btn-close  "
                    onClick={handleClose}
                    aria-label="Close course enquiry modal"
                    style={{
                      right: "-10px",
                      height: "5em",
                      width: "3em",
                      top: "-20px",
                    }}
                  ></button>
                  <h6>Struggling with Career Growth?</h6>
                  <h6>Get Free Career Consultation</h6>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                    />
                    <select
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a program*</option>
                      <option value="Online MBA">Online MBA</option>
                      <option value="Online DSAB">Online DSAB</option>
                      <option value="Help Me Decide">Help Me Decide</option>
                    </select>
                    <select
                      className="td_form_field td_mb_30 td_medium td_white_bg w-100"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">States/Province*</option>
                      {[
                        "Andhra Pradesh",
                        "Arunachal Pradesh",
                        "Assam",
                        "Bihar",
                        "Chhattisgarh",
                        "Goa",
                        "Gujarat",
                        "Haryana",
                        "Himachal Pradesh",
                        "Jharkhand",
                        "Karnataka",
                        "Kerala",
                        "Madhya Pradesh",
                        "Maharashtra",
                        "Manipur",
                        "Meghalaya",
                        "Mizoram",
                        "Nagaland",
                        "Odisha",
                        "Punjab",
                        "Rajasthan",
                        "Sikkim",
                        "Tamil Nadu",
                        "Telangana",
                        "Tripura",
                        "Uttar Pradesh",
                        "Uttarakhand",
                        "West Bengal",
                        "Andaman and Nicobar Islands",
                        "Chandigarh",
                        "Dadra and Nagar Haveli and Daman and Diu",
                        "Lakshadweep",
                        "Delhi",
                        "Puducherry",
                      ].map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    <div className="td_form_card_bottom td_mb_15 mt-3">
                      <button
                        type="submit"
                        className="td_btn td_style_1 td_radius_10 td_medium w-100"
                        disabled={isLoading}
                      >
                        <span className="td_btn_in td_white_color td_accent_bg">
                          <span>{isLoading ? "Submitting..." : "Submit"}</span>
                        </span>
                      </button>
                    </div>
                  </form>
                  <p className="td_form_card_text td_fs_20 td_medium td_heading_color mb-0 mt-3">
                    Your personal information is secure with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {isSpecializationModalOpen && (
        <div
          className="modal fade show d-block"
          id="specializationModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="specializationModalLabel"
          aria-hidden="false"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="td_form_card td_style_1 td_radius_10 td_gray_bg_5 p-4">
                <div className="td_form_card_in position-relative">
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-3"
                    onClick={handleCloseSpecializationModal}
                    aria-label="Close specialization modal"
                  ></button>
                  <h2 className="td_mb_20">
                    {selectedCourseName} Specializations
                  </h2>
                  <table className="table table-bordered">
                    <thead
                      style={{ background: "var(--dark-blue)", color: "white" }}
                    >
                      <tr>
                        <th>Specialization Name</th>
                        <th style={{ textAlign: "center" }}>Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCourseSpecializations.length > 0 ? (
                        selectedCourseSpecializations.map((spec, index) => (
                          <tr key={index}>
                            <td>{spec.name}</td>
                            <td style={{ textAlign: "center" }}>
                              ₹ {spec.fees.toLocaleString()}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" style={{ textAlign: "center" }}>
                            No specializations available
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
      <Footer />
    </>
  );
}
