async function test() {
  try {
    // 1. Test homepage
    const homeRes = await fetch('http://localhost:3000/');
    const homeHtml = await homeRes.text();
    console.log('1. Homepage:');
    console.log('   Status:', homeRes.status);
    console.log('   Includes mobile banner webp:', homeHtml.includes('hero-luxury-banner-mobile.webp'));

    // 2. Test gajray collection
    const gajrayRes = await fetch('http://localhost:3000/collections/fresh-flower-gajray');
    const gajrayHtml = await gajrayRes.text();
    console.log('2. Gajray Collection:');
    console.log('   Status:', gajrayRes.status);
    console.log('   Includes ItemList schema:', gajrayHtml.includes('ItemList'));
    console.log('   Includes 4 Hours Delivery:', gajrayHtml.includes('4 Hours Delivery'));
    console.log('   Includes White Jasmine Motia:', gajrayHtml.includes('White Jasmine Motia Gajray'));

    // 3. Test redirect
    const redirRes = await fetch('http://localhost:3000/collections/beautiful-gajray-garlands-mala-lahore', { redirect: 'manual' });
    console.log('3. Redirect Test:');
    console.log('   Status:', redirRes.status, 'Location:', redirRes.headers.get('location'));
  } catch (err) {
    console.error('Test error:', err);
  }
}

test();
