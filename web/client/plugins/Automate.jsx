import React, { useState, useEffect } from 'react';
import "./Automate.css";
import * as XLSX from 'xlsx';

const AutomateItem = ({ label, children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="mb-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div id="label" className={`flex items-center ${isHovered ? 'text-blue-600 font-bold' : ''}`}>
        {children && (
          <span>{isHovered ? '▼' : '▶'}</span>
        )}
        {label}
      </div>
      {children && isHovered && (
        <div className="aaaa">
         {children}
        </div>
      )}
    </div>
  );
};

const ExcelViewer = ({ data }) => {
  if (!data || data.length === 0) return <p>Aucune donnée à afficher</p>;

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key, index) => (
            <th key={index} className="py-2 px-4 border-b border-gray-300 font-bold text-left">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-100' : ''}>
            {Object.values(row).map((cell, cellIndex) => (
              <td key={cellIndex} className="py-2 px-4 border-b border-gray-300">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const FileViewer = ({ file, onBack }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const result = e.target.result;

        switch (file.type) {
          case 'application/pdf':
            // Utiliser URL.createObjectURL pour créer une URL valide pour le PDF
            const pdfUrl = URL.createObjectURL(file);
            setContent(
              <div className="pdf-container" style={{width: '100%', height: '400px'}}>
                <object
                  data={pdfUrl}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <p>Le navigateur ne peut pas afficher ce PDF. <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Cliquez ici pour le télécharger.</a></p>
                </object>
              </div>
            );
            break;
          case 'text/csv':
          case 'text/plain':
            setContent(<pre className="whitespace-pre-wrap">{result}</pre>);
            break;
          case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
          case 'application/vnd.ms-excel':
            const workbook = XLSX.read(result, { type: 'binary' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setContent(<ExcelViewer data={data} />);
            break;
          case 'application/x-msdownload':
          case 'application/x-executable':
          case 'application/octet-stream':
            setContent(
              <div>
                <p>Fichier exécutable détecté: {file.name}</p>
                <p>Taille: {(file.size / 1024).toFixed(2)} KB</p>
                <p>Type: {file.type}</p>
                <p>Dernière modification: {new Date(file.lastModified).toLocaleString()}</p>
                <p className="text-red-500 font-bold">Attention: L'exécution de fichiers .exe depuis un navigateur n'est pas possible pour des raisons de sécurité.</p>
                <a 
                  href={URL.createObjectURL(file)} 
                  download={file.name}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block mt-4 ml-5"
                >
                  Télécharger le fichier
                </a>
              </div>
            );
            break;
          default:
            if (file.type.startsWith('image/')) {
              setContent(<img src={result} alt={file.name} style={{maxWidth: '100%', maxHeight: '400px'}} />);
            } else if (file.type.startsWith('video/')) {
              setContent(<video src={result} controls style={{maxWidth: '100%', maxHeight: '400px'}} />);
            } else if (file.type.startsWith('audio/')) {
              setContent(<audio src={result} controls />);
            } else {
              setContent(<pre className="whitespace-pre-wrap">{result}</pre>);
            }
        }
      };

      if (file.type.includes('sheet') || file.type.includes('excel')) {
        reader.readAsBinaryString(file);
      } else if (file.type.startsWith('text') || file.type === 'application/pdf') {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsDataURL(file);
      }
    }
  }, [file]);

  return (
    <div className="">
              <button onClick={onBack}>Retour</button>

      <h3 className="text-lg font-bold">Contenu du fichier : {file.name}</h3>
      <div>
      </div>
      <div className="pdf-content">
        {content}
      </div>
    </div>
  );
};

const Automate = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleBack = () => {
    setSelectedFile(null);
  };

  if (selectedFile) {
    return <FileViewer file={selectedFile} onBack={handleBack} />;
  }

  return (
    <div className="menu">
      <AutomateItem label={<span className="span1">Téléchargement et extraction de données</span>}>
        <AutomateItem label={<span className="span2-1">▶ Copernicus</span>}/>
        <AutomateItem label={<span className="span2-2">▶ DGM</span>}/>
      </AutomateItem>
      <br/>
      <AutomateItem label={<span className="span4">▶ Transformation des Fichiers Vortex</span>} />
      <br/>
      <AutomateItem label={<span className="span5">▶ Edit Extract</span>} />
      <br/>
      <AutomateItem label={<span className="span6">▶ Lancement des simulations</span>} />
      <br/>
      <AutomateItem label={<span className="span7">Configuration des alertes</span>}>
        <AutomateItem label={<span className="span3-1">▶ Gestion des comptes de réception</span>} />
        <AutomateItem label={<span className="span3-2">▶ Définition des seuils d'alertes</span>} />
      </AutomateItem>
      <br/>
      <AutomateItem label={<span className="span10">▶ Nettoyage et archivage des prévisions</span>} />
      <br />
      <AutomateItem 
        label={<span className="span11">▶ Télécharger un fichier</span>}
        onClick={() => document.getElementById('fileInput').click()}
      />
      <input
        id="fileInput"
        type="file"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default Automate;