import { Card, Text, Group, Button } from '@mantine/core';
import { FaRegCommentAlt } from "react-icons/fa";
import { GoTriangleUp } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { ImStatsBars2 } from "react-icons/im";

const ProductHuntCard = () => {
    return (
        <Card className="p-6 shadow-lg rounded-lg bg-white max-w-4xl mx-auto my-8 text-black">
            <div className="flex items-center mb-4">
                <img
                    loading="lazy"
                    src="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop"
                    alt="VideoDubber - Fast Video Translator"
                    className="w-18 h-18 object-cover"
                />
                <Text size="lg" className="ml-2 font-bold text-2xl">VideoDubber - Fast Video Translator</Text>
            </div>
            <div className='flex flex-col md:flex-row gap-5 justify-between m-10'>
                <Text className="mb-4 font-thin text-xl md:text-2xl">Translate videos in your own voice, globalize in a click!</Text>
                <Group position="apart" className="mb-4 flex flex-col md:flex-row gap-4">
                    <Button variant="outline" color="gray" className='h-14 w-full md:w-20 rounded-sm border border-gray-300'>Visit</Button>
                    <Button
                        className="bg-[#ff5b5c] text-white rounded-sm w-full md:w-40 h-14 flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out hover:scale-105"
                        style={{
                            transition: 'background-image 0.3s ease-in-out',
                            backgroundImage: 'linear-gradient(227deg, #ff4582, #ff6154)'
                        }}
                    >
                        <div className="flex items-center gap-1">
                            <GoTriangleUp size={30} />
                            <span className="font-semibold">Upvote 114</span>
                        </div>
                    </Button>
                </Group>
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
                <Text className="text-orange-500 text-sm md:text-base">2 months free annually<span className='text-gray-500'> • Free Options</span></Text>
                <div className="flex flex-wrap gap-4 mt-4">
                    <Button className="text-xs md:text-sm">
                        <div className="flex items-center gap-1">
                            <FaRegCommentAlt size={12} />
                            <span>Comment</span>
                        </div>
                    </Button>
                    <Button className="text-xs md:text-sm">
                        <div className="flex items-center gap-1">
                            <CiBookmark size={12} />
                            <span>Bookmark</span>
                        </div>
                    </Button>
                    <Button className="text-xs md:text-sm">
                        <div className="flex items-center gap-1">
                            <FiShare size={12} />
                            <span>Share</span>
                        </div>
                    </Button>
                    <Button className="text-xs md:text-sm">
                        <div className="flex items-center gap-1">
                            <ImStatsBars2 size={12} />
                            <span>Stats</span>
                        </div>
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default ProductHuntCard;
