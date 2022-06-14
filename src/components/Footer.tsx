const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-screen">
      <div className="bg-slate-700 p-4">
        <div className="text-center ">
          <p className="m-0 text-slate-300">
            Made with 💪 ❤️ ☕️ in Portland, Oregon.
          </p>
          <p className="m-0 text-slate-300"> Copyright {currentYear}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
