import React, { useContext } from 'react';
import './modal.scss';
import {appCtx} from "../context";
import moment from 'moment';

function Modal() {
    const singleReport = useContext(appCtx).singleReport;
    const setModal = useContext(appCtx).setModalOpen;
  return (
    <div id="modal">
      <div className='wrapper'>
        <img src='https://cdn.pixabay.com/photo/2021/01/29/08/08/dog-5960092_1280.jpg'></img>
        <h2>{singleReport.candidateName}</h2>
        <div>Company: {singleReport.companyName}</div>
        <div>Interview date: {moment(singleReport.interviewDate).format("DD.MM.YYYY")}</div>
        <div>Phase: {singleReport.phase}</div>
        <div>Status: {singleReport.status}</div>
        <div className='note-wrap'>
          Note: 
          <textarea rows="10" cols="50">{singleReport.note}</textarea>
        </div>
      </div>
      <button onClick={()=>{
        setModal(false)
      }}>X</button>
    </div>
  );
}

export default Modal;

