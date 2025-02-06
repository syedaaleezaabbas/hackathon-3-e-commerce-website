import React from 'react';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const MeetOurTeamSecond = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Username',
            profession: 'Profession',
            Image: '/meet1.png',
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
            Image: '/meet2.png',
            socialLinks: {
                facebook: '#',
                instagram: '#',
                twitter: '#',
            }
        },
        {
            id: 3,
            name: 'Username',
            profession: 'Profession',
            Image: '/meet3.png',
            socialLinks: {
                facebook: '#',
                instagram: '#',
                twitter: '#',
            }
        },
        {
            id: 4,
            name: 'Username',
            profession: 'Profession',
            Image: '/team3.png',
            socialLinks: {
                facebook: '#',
                instagram: '#',
                twitter: '#',
            }
        },
        {
            id: 5,
            name: 'Username',
            profession: 'Profession',
            Image: '/meet5.png',
            socialLinks: {
                facebook: '#',
                instagram: '#',
                twitter: '#',
            }
        },
        {
            id: 6,
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
            id: 7,
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
            id: 8,
            name: 'Username',
            profession: 'Profession',
            Image: '/meet8.png',
            socialLinks: {
                facebook: '#',
                instagram: '#',
                twitter: '#',
            }
        },
        {
            id: 9,
            name: 'Username',
            profession: 'Profession',
            Image: '/meet9.png',
            socialLinks: {
                facebook: '#',
                instagram: '#',
                twitter: '#',
            }
        },
    ];

    return (

        <div className="max-w-6xl mx-auto py-10">
            <h2 className="md:text-4xl text-3xl font-bold text-center mb-16">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {teamMembers.map(member => (
                    <div key={member.id} className="bg-white shadow-lg rounded-lg overflow-hidden md:mx-4 mx-6 md:mb-4 mb-8">
                        <Image src={member.Image} alt={member.name} className="w-[100%] h-64 object-cover" width={200} height={200} />


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

export default MeetOurTeamSecond;
