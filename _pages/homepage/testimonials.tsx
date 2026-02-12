import { PlayIcon, RatingsIcon } from '@/components/icons';
import { TESTIMONIALS } from '@/lib/mock';

import Tag from '@/components/tag';
import Image from 'next/image';

export default function Testimonials() {
	return (
		<section className='bg-light-grey-3 py-[max(5rem,80px)]'>
			<div className='px-gutter'>
				<div className='app-container'>
					<div className='space-y-[max(1.5rem,24px)]'>
						<Tag variant='gradient'>Testimonials</Tag>
						<h2 className='text-heading text-40 font-bold leading-[1.7]'>
							Hear From Customer&apos;s We Serve.
						</h2>
						<p className='text-20 text-charcoal-grey leading-[1.7] -mt-[max(1rem,16px)]'>
							Use the experience of our past customers to know if we&apos;re the
							right fit for you.
						</p>
					</div>
				</div>
			</div>

			<div className='mt-[max(2.5rem,40px)] overflow-x-hidden'>
				<div className='flex items-center gap-[max(1.5rem,24px)] track w-fit'>
					<ul className='flex items-center gap-[max(1.5rem,24px)]'>
						{TESTIMONIALS.map((testimonial, i) => (
							<Testimonial key={i} {...testimonial} />
						))}
						{TESTIMONIALS.map((testimonial, i) => (
							<Testimonial key={i} {...testimonial} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

type TestimonialProp = {
	name: string;
	info: string;
	image: string;
	taxType: string;
	video: {
		src: string;
	} | null;
};

function Testimonial({ name, info, image, taxType, video }: TestimonialProp) {
	if (video) {
		return (
			<li
				className={`min-w-[max(23.188rem,370px)] min-h-[max(27.813rem,440px)]
         rounded-[max(2.5rem,40px)] py-[max(1.5rem,20px)] px-[max(1rem,16px)]
        flex flex-col justify-between relative bg-cover overflow-hidden self-stretch
        `}
				style={{
					backgroundImage: `url(${image})`,
				}}>
				<div className='relative z-2'>
					<p className='text-white text-20 leading-[1.7] font-medium'>{info}</p>
					<h3 className='text-24 text-white font-bold mt-[max(1.5rem,20px)]'>
						{name}
					</h3>
				</div>

				<div className='flex items-center justify-between relative z-2'>
					<Tag variant='gradient'>Company Tax</Tag>
					<Tag>
						<button
							className='flex items-center gap-[max(0.625rem,10px)]
            text-transparent bg-clip-text bg-[linear-gradient(180deg,#001F3F_0%,#003366_100%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]
            '>
							Play Video
							<PlayIcon />
						</button>
					</Tag>
				</div>
				<div className='bg-[#00000099] absolute top-0 left-0 w-full h-full pointer-events-none' />
			</li>
		);
	}

	return (
		<li
			className={`min-w-[max(23.188rem,370px)] min-h-[max(27.813rem,440px)]
      bg-white rounded-[max(2.5rem,40px)] py-[max(1.5rem,20px)] px-[max(1rem,16px)]
      space-y-[max(1.5rem,24px)] self-stretch
      `}>
			<Image src={image} width={164} height={155} alt={name} />
			<RatingsIcon />
			<p className='text-slate text-20 leading-[1.4]'>{info}</p>
			<h3 className='text-24 text-slate leading-[1.1] font-bold'>{name}</h3>
			<Tag variant='gradient'>{taxType}</Tag>
		</li>
	);
}
