import React from "react";
import "./singleCandidatePage.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function SingleCandidatePage (){
    return <div id="single-candidate-page">
        <Header />
        <div className="candidate-details">
            <div className="candidate-box">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                

                <div className="info-details">
                <h2>Name</h2>
                <h3>Mark</h3>
                <h2>Date of Birth</h2>
                <h3>01.01.1991</h3>
                <h2>Email</h2>
                <h3>rale9309@gmail.com</h3>
                <h2>Education</h2>
                <h3>BIT</h3> 
                </div>
                <div className="reports">
                <h2>Reports</h2>
                <table>
                    <tr>
                        <td>Company</td>
                        <td>Interview Date</td>
                        <td>Status</td>
                    </tr>
                    <tr>
                        <td>Google</td>
                        <td>20.12.2017</td>
                        <td>Passed</td>
                        <td className="click"></td>
                    </tr>
                    <tr>
                        <td>Facebook</td>
                        <td>20.12.2017</td>
                        <td>Declined</td>
                        <td className="click"></td>
                    </tr>
                    <tr>
                        <td>Instagram</td>
                        <td>22.12.2020</td>
                        <td>Passed</td>
                        <td className="click"></td>
                    </tr>
                    <tr>
                        <td>Linkedin</td>
                        <td>04.012018</td>
                        <td>Passed</td>
                        <td className="click"></td>
                    </tr>
                </table>
            </div>
            </div>

            
        </div>
        <Footer />
    </div>
}

export default SingleCandidatePage