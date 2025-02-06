import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const MeetOurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Username',
            profession: 'Profession',
            Image: '/team1.png',
            socialLinks: {
                facebook: '#',
                instagram: '#',
                twitter: '#',
            }
        },
        {
            id: 2,
            name: 'Username',
            profession: 'Profession',
            Image: '/team2.jpg',
            socialLinks: {
                facebook: '#',
                instagram: '#',
                twitter: '#',
            }
        },
        {
            id: 3,
            name: 'UserName',
            profession: 'Profession',
            Image: '/team3.png',
            socialLinks: {
                facebook: '#',
                instagram: '#',
                twitter: '#',
            },
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-10">
            <h2 className="md:text-4xl text-3xl font-bold text-center mb-4">Meet Our Team</h2>
            <p className='text-lg text-gray-600 md:px-60 px-4 text-center mb-12'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            <div className="md:flex justify-between">
                {teamMembers.map(member => (
                    <div key={member.id} className="bg-white shadow-lg rounded-lg overflow-hidden md:mx-4 mx-6 md:w-1/3 md:mb-0 mb-8">
                        <img src={member.Image} alt={member.name} className="w-full h-64 object-cover" />


                        <div className="p-4 text-center">
                            <h3 className="text-xl font-semibold">{member.name}</h3>
                            <p className="text-gray-600 mt-3">{member.profession}</p>
                            <div className="flex justify-center mt-3">
                                <a href={member.socialLinks.facebook} className="text-blue-600 mx-2">
                                    <FaFacebook className='text-xl' />
                                </a>
                                <a href={member.socialLinks.instagram} className="text-blue-600 mx-2">
                                    <FaInstagram className='text-xl' />
                                </a>
                                <a href={member.socialLinks.twitter} className="text-blue-600 mx-2">
                                    <FaTwitter className='text-xl' />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MeetOurTeam;
