import re

with open('about.html', 'r', encoding='utf-8') as f:
    content = f.read()

target = r'<div class="bg-gray-50 p-8 rounded-xl border-t-4 border-t-primary shadow-lg card-lift">\s*<h4 class="font-bold font-heading text-primary text-2xl mb-4">Vision</h4>\s*<p class="text-gray-600">To be the undisputed backbone of India\'s heavy infrastructure \r?\ntransportation network\.</p>\s*</div>\s*</div>'

# Fallback target if the precise whitespace match fails
target_fallback = r'<h4 class="font-bold font-heading text-primary text-2xl mb-4">Vision</h4>.*?</div>\s*</div>'

new_section = '''
                  </div>
                  
                  <!-- Aims & Objectives -->
                  <div class="mt-16 bg-white p-8 md:p-12 rounded-xl shadow-[0_20px_50px_rgba(8,_43,_89,_0.1)] border-l-8 border-l-secondary relative overflow-hidden" data-aos="fade-up">
                      <div class="absolute -right-20 -top-20 w-64 h-64 bg-gray-50 rounded-full opacity-50 z-0"></div>
                      
                      <div class="relative z-10">
                          <h3 class="font-black font-heading text-primary text-3xl md:text-4xl mb-6 uppercase tracking-tight">Aims & Objectives</h3>
                          <p class="text-lg text-gray-700 font-medium mb-8 leading-relaxed">
                              <strong class="text-secondary">Siddhivinayak Infra</strong> aims at providing clients with the best services in terms of know-how and experience.
                          </p>
                          
                          <ul class="space-y-6">
                              <li class="flex items-start">
                                  <div class="flex-shrink-0 mt-1 bg-secondary rounded-full p-1 shadow-md">
                                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                  </div>
                                  <p class="ml-4 text-gray-700 leading-relaxed font-medium">In line with customer requirements, to develop innovative solutions for projects, offer different suitable designs, applications and consultancy services, fulfil responsibilities for humanistic, environmental and universal values through understanding and implementing of a high-standard, quality service all in a cost effective way.</p>
                              </li>
                              
                              <li class="flex items-start">
                                  <div class="flex-shrink-0 mt-1 bg-secondary rounded-full p-1 shadow-md">
                                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                  </div>
                                  <p class="ml-4 text-gray-700 leading-relaxed font-medium">Our ongoing mission is to constantly fortify our basic strengths and to respond to any change in pursuing and improving the values demanded by our customers, so that we can achieve both <strong class="text-primary bg-primary/5 px-2 py-1 rounded">"customer satisfaction"</strong> and <strong class="text-primary bg-primary/5 px-2 py-1 rounded">"employee satisfaction"</strong>.</p>
                              </li>
                              
                              <li class="flex items-start">
                                  <div class="flex-shrink-0 mt-1 bg-secondary rounded-full p-1 shadow-md">
                                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                  </div>
                                  <p class="ml-4 text-gray-700 leading-relaxed font-medium">To work professionally and to defend ethics and moral values.</p>
                              </li>
                              
                              <li class="flex items-start">
                                  <div class="flex-shrink-0 mt-1 bg-secondary rounded-full p-1 shadow-md">
                                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                  </div>
                                  <p class="ml-4 text-gray-700 leading-relaxed font-medium">Provide cost effective ground solutions that meet quality standards.</p>
                              </li>
                              
                              <li class="flex items-start">
                                  <div class="flex-shrink-0 mt-1 bg-secondary rounded-full p-1 shadow-md">
                                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                  </div>
                                  <p class="ml-4 text-gray-700 leading-relaxed font-medium">Customer satisfaction thus, earning their valuable trust.</p>
                              </li>
                              
                              <li class="flex items-start">
                                  <div class="flex-shrink-0 mt-1 bg-secondary rounded-full p-1 shadow-md">
                                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                  </div>
                                  <p class="ml-4 text-gray-700 leading-relaxed font-medium">Provide services in a secure way within the scope of efficiency and quality, committed according to schedule and budget.</p>
                              </li>
                              
                              <li class="flex items-start">
                                  <div class="flex-shrink-0 mt-1 bg-secondary rounded-full p-1 shadow-md">
                                      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                  </div>
                                  <p class="ml-4 text-gray-700 leading-relaxed font-medium">Meeting the highest quality of safety and environmental standards as mandated by the accredited international safety and environmental bodies.</p>
                              </li>
                          </ul>
                      </div>
                  </div>'''

if re.search(target, content, re.DOTALL):
    content = re.sub(target, new_section, content, flags=re.DOTALL)
    print("Used strict target match")
else:
    # Use fallback
    content = re.sub(target_fallback, r'\g<0>' + '\n' + new_section.replace('                  </div>\n                  \n', ''), content, flags=re.DOTALL)
    print("Used fallback target match")

with open('about.html', 'w', encoding='utf-8') as f:
    f.write(content)

