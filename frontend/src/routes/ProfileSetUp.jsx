
import BasicInfoBox from "../components/BasicInfoBox.jsx"
import ProfileInfoBox from "../components/ProfileInfoBox.jsx"
import SkillInfoBox from "../components/SkillInfoBox.jsx"


const ProfileSetUp = ({onSubmit,onPreview}) => {
    return(
        <div className="flex flex-col items-center justify-content gap-4"> 
            <BasicInfoBox/>
            <ProfileInfoBox/>
            <SkillInfoBox/>
            <div className="flex items-center justify-content gap-4">
            <button
                    className="px-10 py-3 mt-4 bg-blue-500 text-white rounded-xl"
                    onClick={onSubmit}
                >
                    Submit
                </button>
                <button
                    className="px-10 py-3 mt-4 bg-blue-500 text-white rounded-xl"
                    onClick={onPreview}
                >
                    Preview
                </button>
            </div>
            
        </div>
    )
}

export default ProfileSetUp