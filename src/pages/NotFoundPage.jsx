import React from 'react';
import { Link } from 'react-router-dom';
function NotFoundPage() { return <section className="page not-found"><span>404</span><h1>Sepertinya kamu tersesat</h1><p>Halaman yang kamu cari tidak tersedia atau sudah berpindah.</p><Link className="button button--primary" to="/">Pulang ke beranda</Link></section>; }
export default NotFoundPage;
