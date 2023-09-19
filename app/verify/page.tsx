export default function VerifyPage() {
  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center py-[100px]">
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <label htmlFor="user">
              <img
                src="/camerabtn.png"
                alt="camera"
                className="w-[100px] rounded-full"
              />
            </label>
          </div>
          <img src="/Verify.png" alt="VERIFY" className="w-[450px]" />
          <input
            type="file"
            id="user"
            capture="user"
            accept="image/*"
            className="hidden max-w-fit items-center justify-center space-x-2 rounded-full px-5 py-2 text-sm shadow-md hover:bg-gradient-to-r hover:from-[#cc3d7e] hover:to-orange bg-gradient-to-r from-bluemain to-purplemain font-medium transition text-white"
          />
        </div>
      </main>
    </div>
  );
}
