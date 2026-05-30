import { useState } from 'react';
import { entities, items, blocks, spawns, recipes } from './data';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('entities');
  const [selectedItem, setSelectedItem] = useState<any>(entities[0]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'entities') setSelectedItem(entities[0]);
    else if (tab === 'items') setSelectedItem(items[0]);
    else if (tab === 'blocks') setSelectedItem(blocks[0]);
    else if (tab === 'spawns') setSelectedItem(spawns[0] || null);
    else if (tab === 'recipes') setSelectedItem(recipes[0] || null);
    else setSelectedItem(null); // Clear selection for empty tabs
  };

  const renderActiveList = () => {
    // Handle tabs that have no content yet
    if (activeTab === 'images') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '1rem' }}>
          <div className="glass-panel" style={{ padding: '1rem' }}>
            <img src={`${import.meta.env.BASE_URL}crafting.png`} alt="Crafting Tame Ball" style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--glass-border)', aspectRatio: '16/9', objectFit: 'cover' }} />
            <h3 style={{ marginTop: '1.5rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Tame Ball Crafting</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>Successfully crafting the Tame Ball using Ender Pearls, Redstone, and Iron.</p>
          </div>
          <div className="glass-panel" style={{ padding: '1rem' }}>
            <img src={`${import.meta.env.BASE_URL}golden.png`} alt="Golden Retriever Spawn" style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--glass-border)', aspectRatio: '16/9', objectFit: 'cover' }} />
            <h3 style={{ marginTop: '1.5rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>Meadow Spawn Event</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>The exact moment a Golden Retriever was summoned from a good night's sleep in the Meadow!</p>
          </div>
          <div className="glass-panel" style={{ padding: '1rem' }}>
            <img src={`${import.meta.env.BASE_URL}zombie.png`} alt="Zombie Pet" style={{ width: '100%', borderRadius: '12px', border: '1px solid var(--glass-border)', aspectRatio: '16/9', objectFit: 'cover' }} />
            <h3 style={{ marginTop: '1.5rem', color: 'var(--text-primary)', fontSize: '1.2rem' }}>A Burning Companion</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>Using the Tame Ball to successfully capture a burning Zombie and turn it into a loyal pet!</p>
          </div>
        </div>
      );
    }

    if (['videos'].includes(activeTab)) {
      return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px dashed var(--glass-border)' }}>
          <h2 style={{ color: 'var(--text-secondary)' }}>Nothing here yet!</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '1rem' }}>
            Check back later. This content is currently under development.
          </p>
        </div>
      );
    }

    if (activeTab === 'bug') {
      return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px dashed var(--glass-border)' }}>
          <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem' }}>Found a Bug? 🐛</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto 2.5rem auto', lineHeight: 1.6 }}>
            Oh no! Please let us know exactly what happened so we can squash it!
            When you send your bug report, please tell us things like: Which dog breed were you dealing with? What biome were you in? Did the game crash?
          </p>
          <a
            className="nav-link"
            style={{ display: 'inline-block', background: 'var(--accent-color)', color: '#0f172a', padding: '1rem 3rem', borderRadius: '12px', fontWeight: '800' }}
            href="mailto:vivifarris42@gmail.com?subject=Catch%20%26%20Tame%20Mod%20-%20Bug%20Report&body=Describe%20the%20bug%20you%20found%20here%3A%0A%0A"
          >
            Open Email Client to Report Bug
          </a>
        </div>
      );
    }

    if (activeTab === 'suggest') {
      return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px dashed var(--glass-border)' }}>
          <h2 style={{ color: 'var(--text-primary)', fontSize: '2rem' }}>Got an Idea? 💡</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto 2.5rem auto', lineHeight: 1.6 }}>
            If you have an amazing idea for a brand new Dog Breed, a cool machine Block, or perfectly balanced Crafting mechanics, we want to hear it!
            Make sure to be extremely descriptive about exactly how you want your awesome idea to physically work in the game!
          </p>
          <a
            className="nav-link"
            style={{ display: 'inline-block', background: 'var(--accent-purple)', color: '#fff', padding: '1rem 3rem', borderRadius: '12px', fontWeight: '800' }}
            href="mailto:vivifarris42@gmail.com?subject=Catch%20%26%20Tame%20Mod%20-%20Feature%20Suggestion&body=I%20have%20an%20awesome%20idea%20for%20a%20new%20Dog%20or%20Item!%0A%0A"
          >
            Open Email Client to Suggest Feature
          </a>
        </div>
      );
    }

    let list: any[] = [];
    if (activeTab === 'entities') list = entities;
    if (activeTab === 'items') list = items;
    if (activeTab === 'blocks') list = blocks;
    if (activeTab === 'spawns') list = spawns;
    if (activeTab === 'recipes') list = recipes;

    return (
      <div className="grid-layout">
        {list.map((item) => (
          <div
            key={item.id}
            className={`glass-panel card ${selectedItem?.id === item.id ? 'selected' : ''}`}
            onClick={() => setSelectedItem(item)}
          >
            <h3 className="card-title">{item.name}</h3>
            {item.tagline && <div className="card-tagline">{item.tagline}</div>}
            {item.type && <div className="card-tagline">{item.type}</div>}
            {item.rarity && <div className="card-tagline">Rarity: {item.rarity}</div>}
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const renderDetailPanel = () => {
    if (!selectedItem) return null;

    return (
      <div className="detail-panel" key={selectedItem.id}>
        <div className="detail-header">
          <h2 className="detail-title">{selectedItem.name}</h2>
          {(selectedItem.tagline || selectedItem.type || selectedItem.rarity) && (
            <p className="detail-tagline">
              {selectedItem.tagline || selectedItem.type || `Rarity: ${selectedItem.rarity}`}
            </p>
          )}
        </div>

        {/* Dynamic Header Stats for Entities */}
        {activeTab === 'entities' && (
          <div className="detail-stats">
            <div className="stat-box"><span className="val stat-health">{selectedItem.health}</span><span className="lbl">Max HP</span></div>
            <div className="stat-box"><span className="val stat-speed">{selectedItem.speed}</span><span className="lbl">Speed</span></div>
            <div className="stat-box"><span className="val stat-damage">{selectedItem.damage}</span><span className="lbl">Damage</span></div>
          </div>
        )}

        <div className="detail-section">
          <div className="section-title">Overview</div>
          <div className="section-content">{selectedItem.description}</div>
        </div>

        {/* Features for Entities */}
        {selectedItem.features && (
          <div className="detail-section">
            <div className="section-title">Unique Behaviors</div>
            <div className="feature-list">
              {selectedItem.features.map((feat: any, idx: number) => (
                <div className="feature-item" key={idx}>
                  <div className="feature-icon">{feat.icon}</div>
                  <div className="feature-text">
                    <h4>{feat.name}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mechanics for Items */}
        {selectedItem.mechanics && (
          <div className="detail-section">
            <div className="section-title">Technical Mechanics</div>
            <div className="feature-list">
              {selectedItem.mechanics.map((mech: string, idx: number) => (
                <div className="feature-item" key={idx}>
                  <div className="feature-icon">⚙️</div>
                  <div className="feature-text">
                    <p style={{ marginTop: '0.4rem' }}>{mech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mechanic Detail for Blocks */}
        {selectedItem.mechanicDetail && (
          <div className="detail-section">
            <div className="section-title">How it works</div>
            <div className="section-content">{selectedItem.mechanicDetail}</div>
          </div>
        )}

        {/* Fun Facts / Lore */}
        {(selectedItem.funFact || selectedItem.flavor || selectedItem.tip) && (
          <div className="detail-section">
            <div className="fun-fact">
              <p>{selectedItem.funFact || selectedItem.flavor || selectedItem.tip}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'entities': return 'Entities Catalog';
      case 'items': return 'Taming Gear';
      case 'blocks': return 'Facilities';
      case 'images': return 'Media Gallery: Images';
      case 'videos': return 'Media Gallery: Videos';
      case 'bug': return 'Report an Issue';
      case 'suggest': return 'Feature Suggestion';
      case 'recipes': return 'Crafting Recipes';
      case 'spawns': return 'Biome Spawns';
      default: return '';
    }
  };

  const getPageSubtitle = () => {
    switch (activeTab) {
      case 'entities': return 'Select an entity to view its exact health, speed, and hidden genetic traits.';
      case 'items': return 'Deep dive into the catch-rate formulas and taming devices.';
      case 'blocks': return 'Learn how to store, heal, and trade your companions.';
      case 'images': return 'Screenshots and artwork from the Catch & Tame Mod.';
      case 'videos': return 'Clips of gameplay, taming showcases, and mutant explosions.';
      case 'bug': return 'Help us track down and squash issues in the mod.';
      case 'suggest': return 'Send your brightest ideas directly to the dev team!';
      case 'recipes': return 'Discover how to craft items like Tame Balls and Breed Sticks.';
      case 'spawns': return 'Track down where each dog breed spawns natively in the world.';
      default: return '';
    }
  };

  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-title">Catch & Tame<br />Wiki</div>

        {/* Core Sections */}
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem', marginBottom: '-0.5rem', paddingLeft: '1.25rem' }}>Core</div>
        <a className={`nav-link ${activeTab === 'entities' ? 'active' : ''}`} onClick={() => handleTabChange('entities')}>🧬 Entities</a>
        <a className={`nav-link ${activeTab === 'items' ? 'active' : ''}`} onClick={() => handleTabChange('items')}>🎒 Taming Gear</a>
        <a className={`nav-link ${activeTab === 'blocks' ? 'active' : ''}`} onClick={() => handleTabChange('blocks')}>🏗️ Facilities</a>

        {/* Guides & Data Sections */}
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1.5rem', marginBottom: '-0.5rem', paddingLeft: '1.25rem' }}>Guides</div>
        <a className={`nav-link ${activeTab === 'recipes' ? 'active' : ''}`} onClick={() => handleTabChange('recipes')}>⚒️ Crafitng Recipes</a>
        <a className={`nav-link ${activeTab === 'spawns' ? 'active' : ''}`} onClick={() => handleTabChange('spawns')}>🗺️ Biome Spawns</a>

        {/* Media Sections */}
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1.5rem', marginBottom: '-0.5rem', paddingLeft: '1.25rem' }}>Media</div>
        <a className={`nav-link ${activeTab === 'images' ? 'active' : ''}`} onClick={() => handleTabChange('images')}>🖼️ Images</a>
        <a className={`nav-link ${activeTab === 'videos' ? 'active' : ''}`} onClick={() => handleTabChange('videos')}>🎬 Videos</a>

        {/* Support Section */}
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '1.5rem', marginBottom: '-0.5rem', paddingLeft: '1.25rem' }}>Support</div>
        <a className={`nav-link ${activeTab === 'bug' ? 'active' : ''}`} onClick={() => handleTabChange('bug')}>🐛 Report a Bug</a>
        <a className={`nav-link ${activeTab === 'suggest' ? 'active' : ''}`} onClick={() => handleTabChange('suggest')}>💡 Suggest Feature</a>

      </nav>

      <main className="main-wrapper">
        <div className="content-left">
          <header className="page-header">
            <h1 className="page-title">{getPageTitle()}</h1>
            <p className="page-subtitle">{getPageSubtitle()}</p>
          </header>

          {renderActiveList()}
        </div>

        <div className="content-right" style={{ transform: selectedItem ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
          {renderDetailPanel()}
        </div>
      </main>
    </>
  );
}

export default App;
