const Footer = () => {
    return (
        <div className="mt-12 bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
                {/* Logo and Name */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold">SkillSwap</h2>
                    <p className="text-gray-400 text-sm">Empowering skill exchange worldwide</p>
                </div>

            {/* Copyright */}
            <div className="mt-6 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} SkillSwap. All rights reserved.
            </div>
        </div>
        </div>
    );
};

export default Footer;
