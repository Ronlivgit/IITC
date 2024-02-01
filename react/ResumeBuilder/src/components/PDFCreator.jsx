import React, { createContext, useState, useContext, useEffect,useLayoutEffect } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/ResumeBuilder'
import '../pages/UserResumes'
// import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function CreatePDF({fileName}){

    const [pdfLoaded,setPdfLoaded] = useState(false)
    
    const PDFBuilder = async () =>{
            const capture = document.querySelector(`.${fileName}`)
            console.log(capture);
            if(capture){
            setPdfLoaded(true)
            await html2canvas(capture).then((canvas)=>{
                const imgData = canvas.toDataURL('img/png')
                const selectedDoc =  new jsPDF('p','mm','a4');
                const compWidth = canvas.scrollWidth
                const compHeight = canvas.scrollHeight
                // const compWidth = selectedDoc.internal.pageSize.getWidth()
                // const compHeight = selectedDoc.internal.pageSize.getHeight()
                console.log(compWidth);
                console.log(compHeight);
                selectedDoc.addImage(imgData, 'PNG', 0, 0, compWidth,compHeight)
                setPdfLoaded(false)
                selectedDoc.save('My Resume.pdf')
            })}
            else{
                console.log(capture);
                console.log("Else");
            }
        }

    // useEffect(()=>{
    //     PDFBuilder()
    // },[])
    
    return(
        <>
            <button className="PDFBtn" data-html2canvas-ignore="true" onClick={PDFBuilder}>{pdfLoaded?(<span>Downloading PDF</span>):<span>Dowload As PDF</span>}</button>
        </>
    )
}

export default CreatePDF