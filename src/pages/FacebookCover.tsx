import FacebookCover from "@/components/FacebookCover";

const FacebookCoverPage = () => {
  return (
    <div className="min-h-screen bg-muted p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Facebook Cover Page</h1>
          <p className="text-muted-foreground">Professional hotel cover design for social media</p>
        </div>
        
        <FacebookCover />
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Download or screenshot this design for your Facebook business page
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacebookCoverPage;