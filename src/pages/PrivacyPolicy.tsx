import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="dashboard-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ArrowLeft size={20} />
        Voltar
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card" 
        style={{ maxWidth: 'none', textAlign: 'left' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <Shield size={32} color="var(--primary)" />
          <h1 style={{ margin: 0, textAlign: 'left', background: 'none', webkitTextFillColor: 'initial', color: 'white' }}>Política de Privacidade</h1>
        </div>

        <div style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
          <p style={{ marginBottom: '1rem' }}>
            Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você usa o <strong>TesteAuth</strong>.
          </p>

          <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Informações que Coletamos</h3>
          <p>
            Ao fazer login com o Google, recebemos seu endereço de e-mail, nome e foto de perfil. Usamos essas informações exclusivamente para criar sua conta e personalizar sua experiência no painel.
          </p>

          <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Como usamos seus dados</h3>
          <p>
            Seus dados são armazenados de forma segura no Supabase e não são compartilhados com terceiros para fins de marketing ou publicidade.
          </p>

          <h3 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. Seus Direitos</h3>
          <p>
            Você pode solicitar a exclusão da sua conta e de todos os dados associados a qualquer momento entrando em contato conosco.
          </p>

          <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', fontSize: '0.8rem' }}>
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
