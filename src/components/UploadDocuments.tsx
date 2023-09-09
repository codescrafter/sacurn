import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface IProps {
  uploadedDocs: File[];
  setUploadedDocs: Dispatch<SetStateAction<File[]>>;
}

const UploadDocuments = ({ uploadedDocs, setUploadedDocs }: IProps) => {
  const addOptionHandler = (file: File) => {
    setUploadedDocs((prevState) => [...prevState, file]);
  };

  const removeDocumentHandler = (idx: number) => {
    setUploadedDocs((prevState) => prevState.filter((item, index) => index !== idx));
  };

  console.log('uploadedDocs', uploadedDocs);
  return (
    <div className="flex flex-col max-w-[372px] max">
      <p className="text-black min-[1500px]:text-base text-sm">
        影業登記文件檔上傳,限小於<span className="text-bright-red">2MB</span>的JPG、PNG檔案。
      </p>
      <p className="text-navy-blue underline">了解營業登記文件上傳...</p>
      <div className="flex flex-row flex-wrap max-w-[360px] gap-4 mt-2">
        {uploadedDocs.map((item, idx) => {
          return (
            <>
              <div className="flex flex-col rounded-xl border items-center border-silverstone h-23.2 w-26.7 relative">
                {/* add cfoss icon to delete item */}
                <div
                  className="absolute top-0 right-2 font-semibold cursor-pointer"
                  onClick={() => removeDocumentHandler(idx)}
                >
                  &#215;
                </div>
                <p className="text-[36px] text-black mt-2">{idx + 1}</p>
                <label className="rounded-full bg-navy-blue p-0.5 px-5 text-xms text-white" htmlFor="get-file">
                  選擇
                </label>
              </div>
            </>
          );
        })}
        <div className="flex flex-col rounded-xl border border-silverstone bg-light-trans-grey items-center justify-center h-23.2 w-26.7 relative">
          <img src="/images/operation-record/plus-icon.svg" alt="add new doc" />
          <input
            type="file"
            className="absolute scale-y-[1] max-w-full max-h-full top-0 bottom-0 left-0 opacity-0 cursor-pointer z-50"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              e?.target?.files && e?.target?.files?.length > 0 && addOptionHandler(e.target.files[0])
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;