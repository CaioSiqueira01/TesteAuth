import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Mail, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="dashboard-container">
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck color="#6366f1" />
          <span>DevApp</span>
        </div>
        <button onClick={signOut} className="logout-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LogOut size={18} />
          Sair
        </button>
      </nav>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card" 
        style={{ maxWidth: 'none', margin: '0 auto' }}
      >
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <img 
            src={user?.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${user?.email}`} 
            alt="Avatar" 
            style={{ width: '100px', height: '100px', borderRadius: '50%', border: '4px solid var(--primary)' }}
          />
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Olá, {user?.user_metadata?.full_name || 'Usuário'}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                <Mail size={16} />
                <span>{user?.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                <User size={16} />
                <span>ID: {user?.id.slice(0, 8)}...</span>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Status da Autenticação</h3>
          <div style={{ 
            background: 'rgba(52, 211, 153, 0.1)', 
            color: '#34d399', 
            padding: '1rem', 
            borderRadius: '12px',
            border: '1px solid rgba(52, 211, 153, 0.2)',
            display: 'inline-block'
          }}>
            Logado com Sucesso via Google
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
