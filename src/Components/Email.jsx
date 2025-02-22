import React, { useState } from 'react';

const Email = () => {
  const [emails, setEmails] = useState([]);
  const [emailContent, setEmailContent] = useState('');

  const sendEmail = () => {
    setEmails([...emails, emailContent]);
    setEmailContent('');
  };

  return (
    <div>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
      <textarea 
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
      />
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default Email;