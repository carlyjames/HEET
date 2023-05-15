import React from 'react'

const TermsCard = () => {
  return (
    <div className='lg:p-24 p-1 lg:py-4 '>
      <div className='px-2 lg:px-16 flex flex-col gap-8 text-xl'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[#478807] text-2xl'>1. Introduction</h1>
          <p>By using the Angry Pepe Token website (the "Website"), you agree to these Terms of Use. Please read them carefully before accessing or using the Website. If you do not agree to these Terms of Use, please do not use the Website.</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[#478807] text-2xl'>2. Risk Warning</h1>
          <p>Investing in cryptocurrencies, such as Angry Pepe Token, carries a high level of risk. You should be aware that the value of your investment may fluctuate, and you may lose all or part of your investment. The responsibility for your capital lies with you, and you should not invest more than you can afford to lose. The Website and its organizers are not responsible for any losses you may incur or for the overall market capitalization.</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[#478807] text-2xl'>3. No Investment Advice</h1>
          <p>The information provided on the Website is for informational purposes only and does not constitute investment advice, financial advice, trading advice, or any other type of advice. You should conduct your own research and consult with a qualified professional before making any investment decisions.</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[#478807] text-2xl'>4. Age Restriction</h1>
          <p>The Website and its services are intended for users who are 21 years of age or older. By accessing or using the Website, you represent and warrant that you are at least 21 years of age. If you are under 21, you may not access or use the Website or its services.</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[#478807] text-2xl'>5. Limitation of Liability</h1>
          <p>To the maximum extent permitted by law, the Website and its organizers shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, resulting from the use of or inability to use the Website or its services.</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[#478807] text-2xl'>6. Changes to Terms of Use</h1>
          <p>We reserve the right to modify or update these Terms of Use at any time without prior notice. Your continued use of the Website constitutes your acceptance of the revised terms. It is your responsibility to review the Terms of Use periodically to stay informed about any changes.</p>
        </div>
      </div>
    </div>
  )
}

export default TermsCard