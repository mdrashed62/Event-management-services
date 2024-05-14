import security1 from '../../assets/security1.jpeg'
import security2 from '../../assets/security2.jpeg'

const ExtraSection3 = () => {
    return (
        <div className="mb-6 bg-[#E9DAC1] p-6 rounded-md">
            <h1 className="text-2xl lg:text-5xl text-green-600 font-bold text-center mb-6">Our Security for Events</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className=''>
                <img className=' w-full rounded-lg' src={security1} />
                </div>
                <div>
                <img className='w-full h-full rounded-lg' src={security2} />
                </div>
            </div>
            <p className='mt-6 text-black'>At [Epic Eventistry], we prioritize the safety and security of all attendees at every event we manage. We understand the importance of creating a secure environment where guests can enjoy themselves without worry. Our comprehensive security measures are designed to mitigate risks and ensure a smooth and secure event experience.We employ a team of highly trained and experienced security professionals who are adept at handling various situations effectively. Our security personnel undergo rigorous training in crowd management, conflict resolution, emergency response, and first aid to ensure they are well-equipped to handle any scenario that may arise during an event <span className='text-red-500 font-bold'>Read more...</span></p>
        </div>
    );
};

export default ExtraSection3;