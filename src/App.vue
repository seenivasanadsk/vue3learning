<template>
  <v-card class="mx-auto" max-width="365">
    <v-toolbar color="light-blue" extended light>
      <v-app-bar-nav-icon color="grey-darken-4"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="grey-darken-4" icon="mdi-magnify"></v-btn>

      <v-btn color="grey-darken-4" icon="mdi-view-module"></v-btn>

      <template v-slot:extension>
        <v-fab
          class="ms-4"
          color="cyan-accent-2"
          icon="mdi-plus"
          location="top left"
          size="50"
          absolute
          offset
          @click="dialog = !dialog"
        ></v-fab>
      </template>
    </v-toolbar>
    <v-chip label="">Seeni</v-chip>
    <v-list lines="two" subheader>
      <v-list-subheader title="Folders" inset></v-list-subheader>

      <v-list-item v-for="item in items" :key="item.title" link>
        <template v-slot:prepend>
          <v-avatar :class="[item.iconClass]" :icon="item.icon"></v-avatar>
        </template>

        <v-list-item-title>{{ item.title }}</v-list-item-title>

        <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>

        <template v-slot:append>
          <v-list-item-action>
            <v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-list-subheader title="Files" inset></v-list-subheader>

      <v-list-item v-for="item in items2" :key="item.title" link>
        <template v-slot:prepend>
          <v-avatar :class="[item.iconClass]" :icon="item.icon"></v-avatar>
        </template>

        <v-list-item-title>{{ item.title }}</v-list-item-title>

        <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>

        <template v-slot:append>
          <v-list-item-action>
            <v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-text>
          <v-text-field label="File name"></v-text-field>

          <small class="text-grey">* This doesn't actually save.</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" variant="text" @click="dialog = false"> Submit </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
