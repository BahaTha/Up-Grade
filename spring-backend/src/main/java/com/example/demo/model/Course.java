package com.example.demo.model;

import java.util.Date;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;

	@Entity
	public class Course {
		@Id
		 @GeneratedValue(strategy = GenerationType.AUTO)
	    @Column(nullable = false, updatable = false)
		private long id;
		@Column(name="title")
		private String title;
		
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		@Column(name="Date_creation")
		private Date Date_creation;
		@Column(name="Image")
		private String Image;
		
	
		public Course(long id, Date date_creation, String image) {
			super();
			this.id = id;
			Date_creation = date_creation;
			Image = image;
			
		}
		public Course() {
			
		}
		public long getId() {
			return id;
		}
		public void setId(long id) {
			this.id = id;
		}
		public Date getDate_creation() {
			return Date_creation;
		}
		public void setDate_creation(Date date_creation) {
			Date_creation = date_creation;
		}
		public String getImage() {
			return Image;
		}
		public void setImage(String image) {
			Image = image;
		}
		
		
		public Categorie getCategorie() {
			return categorie;
		}
		public void setCategorie(Categorie categorie) {
			this.categorie = categorie;
		}
		public Course(long id, String title, Date date_creation, String image, Categorie categorie) {
			super();
			this.id = id;
			this.title = title;
			Date_creation = date_creation;
			Image = image;
			this.categorie = categorie;
		}
		    @ManyToOne(optional=false)
		    @JoinColumn(name="id", nullable=false,insertable=false, updatable=false)
		    private Categorie categorie;
		    @JsonIgnore
			@OneToMany(mappedBy="id")
			private Set<Videos> items;
		
		
}
