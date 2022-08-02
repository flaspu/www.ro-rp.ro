<template>
    <div class="container mx-auto font-poppins">
        <div v-for="(section, key) in Object.keys(team)" :key="key">
            <h2 class="text-4xl font-semibold text-[#333] my-10">{{ section }}</h2>
            <div class="grid grid-cols-4 gap-10">
                <LoadingMembers v-if="members.length == 0" />
                <div class="member shadow-lg flex flex-row p-4 gap-4" v-for="(member, key) in team[section]" :key="key" v-else>
                    <div class="flex flex-row">
                        <div class="rounded-full avatar" :style="{ backgroundImage: `url('${getAvatar(member.Avatar)}')` }"></div>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="text-lg font-semibold">{{ member.Username }}</h2>
                        <div class="roles" v-for="(role, key) in this.getMemberRoles(member.Username).slice(0, 2)" :key="key">
                            <div class="role bg-gray-100 font-light" :class="this.roles[role]">
                                {{ role }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script lang="ts">
import axios from 'axios';

enum AdminLevels {
    "Trial Admin" = 1,
    "Game Admin Level 2",
    "Game Admin Level 3",
    "Senior Administrator",
    "Lead Administrator",
    "Management",
    "Community Supporter"
}

enum DeveloperLevels {
    "Game Developer" = 1,
    "Senior Developer",
    "Lead Developer"
}

enum PropertyLevels {
    "Property Management" = 1,
    "Head of Properties"
}

enum FactionLevels {
    "Faction Management" = 1,
    "Head of Factions"
}

const TEAM_URL = 'https://ucp.ro-rp.ro/teams';

export default {
    data () {
        return {
            members: [],
            team: {
                'Leadership': [],
                'Administratori': [],
                'Developeri': [],
                'Testeri': [],
                'Faction Management': [],
                'Property Management': []
            },
            roles: {
                'Trial Admin': 'admin',
                'Game Admin Level 2': 'admin',
                'Game Admin Level 3': 'admin',
                'Senior Administrator': 'admin',
                'Lead Administrator': 'admin',

                'Management': 'leadership',
                'Community Supporter': 'leadership',

                'Tester': 'tester',

                'Game Developer': 'game-dev',
                'Senior Developer': 'senior-dev',
                'Lead Developer': 'lead-dev',

                'Property Management': 'pm',
                'Head of Properties': 'pm',

                'Faction Management': 'fm',
                'Head of Factions': 'fm',
            }
        };
    },
    created () {
        axios.get(TEAM_URL).then(res => {
            this.team['Leadership'] = res.data.filter(x => x.AdminLevel > 5);
            this.team['Administratori'] = res.data.filter(x => x.AdminLevel <= 5 && x.AdminLevel > 0);
            this.team['Developeri'] = res.data.filter(x => x.DeveloperLevel > 0);
            this.team['Testeri'] = res.data.filter(x => x.TesterLevel > 0);
            this.team['Faction Management'] = res.data.filter(x => x.FactionLevel > 0);
            this.team['Property Management'] = res.data.filter(x => x.PropertyLevel > 0);

            this.members = res.data;
        });
    },
    methods: {
        getAvatar: function (avatar: string): string {
            if(avatar == 'blank.png') {
                return 'https://ucp.ro-rp.ro/assets/media/avatars/blank.png';
            } else {
                return 'https://ucp.ro-rp.ro/uploads/avatars/' + avatar;
            }
        },
        getMemberRoles: function (username: string) {
            let roles = [];

            let member = this.members.find(x => x.Username == username);
            if(member) {
                if(member.AdminLevel > 0) {
                    roles.push(AdminLevels[member.AdminLevel]);
                }

                if(member.DeveloperLevel > 0) {
                    roles.push(DeveloperLevels[member.DeveloperLevel]);
                }

                if(member.TesterLevel > 0) {
                    roles.push('Tester');
                }

                if(member.FactionLevel > 0) {
                    roles.push(FactionLevels[member.FactionLevel]);
                }

                if(member.PropertyLevel > 0) {
                    roles.push(PropertyLevels[member.PropertyLevel]);
                }
            }

            return roles;
        }
    }
}
</script>