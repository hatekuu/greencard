import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 relative left-12">
      <h1 className="text-4xl font-bold mb-8">Về Chúng Tôi</h1>
      
      {/* Company Description */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Công Ty Chúng Tôi</h2>
        <p className="text-gray-700 text-lg">
          Chúng tôi là một công ty hàng đầu trong lĩnh vực XYZ, với sứ mệnh mang lại những sản phẩm và dịch vụ tốt nhất cho khách hàng. Từ khi thành lập vào năm 20xx, chúng tôi đã không ngừng nỗ lực để cải tiến và phát triển, nhằm đáp ứng nhu cầu ngày càng cao của thị trường.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Sứ Mệnh & Tầm Nhìn</h2>
        <p className="text-gray-700 text-lg">
          Sứ mệnh của chúng tôi là "Mang lại giá trị thực cho khách hàng và cộng đồng". Chúng tôi luôn hướng tới sự bền vững và phát triển lâu dài, không chỉ về mặt kinh doanh mà còn về môi trường và xã hội.
        </p>
        <p className="text-gray-700 text-lg mt-4">
          Tầm nhìn của chúng tôi là trở thành công ty hàng đầu trong ngành, được khách hàng và đối tác tin cậy và lựa chọn.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Đội Ngũ Của Chúng Tôi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Team Member 1 */}
          <div className="team-member bg-white p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold">Nguyễn Văn A</h3>
            <p className="text-gray-700">CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member bg-white p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold">Trần Thị B</h3>
            <p className="text-gray-700">COO</p>
          </div>

          {/* Team Member 3 */}
          <div className="team-member bg-white p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-bold">Lê Văn C</h3>
            <p className="text-gray-700">CTO</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Liên Hệ</h2>
        <p className="text-gray-700 text-lg">
          Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào, xin vui lòng liên hệ với chúng tôi qua email tại <a href="mailto:contact@company.com" className="text-blue-500">xxxxx@company.com</a> hoặc gọi đến số điện thoại <a href="tel:+xxxxxxx" className="text-blue-500">+xxx-xxx-xxx</a>.
        </p>
      </section>
    </div>
  );
}

export default About;
