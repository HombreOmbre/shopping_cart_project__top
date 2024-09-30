import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MapSiteItem } from '../components/MapSiteItem';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('MapSiteItem Component', () => {
    it('renders correctly with given title and links', () => {
        const props = {
            title: 'Useful Links',
            linksToSite: ['Home', 'About Us', 'Contact', 'Services'],
        };

        render(
            <MemoryRouter>
                <MapSiteItem title={props.title} linksToSite={props.linksToSite} />
            </MemoryRouter>
        );

        expect(screen.getByText('Useful Links')).toBeInTheDocument();

        props.linksToSite.forEach((linkText) => {
            expect(screen.getByText(linkText)).toBeInTheDocument();
        });
    });

    it('matches the snapshot', () => {
        const props = {
            title: 'Quick Links',
            linksToSite: ['Home', 'FAQ', 'Privacy Policy', 'Terms of Service'],
        };

        const { asFragment } = render(
            <MemoryRouter>
                <MapSiteItem title={props.title} linksToSite={props.linksToSite} />
            </MemoryRouter>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});