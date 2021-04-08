const FormInIframe = () => {
  return (
    <div style={{ padding: 15 }}>
      <iframe
        src={"http://localhost:8000/#/form"}
        title={"dd"}
        width={"100%"}
        height={300}
      ></iframe>
    </div>
  );
};

export default FormInIframe;
