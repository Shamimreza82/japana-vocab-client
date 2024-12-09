const Tutorials = () => {

    
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Tutorials</h1>
        <div className="space-y-4">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/example1"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/example2"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default Tutorials;